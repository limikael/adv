const {ipcRenderer, ipcMain}=require("electron");
const {createMethodPromise}=require("../utils/promise-util.js");

function createIpcRendererReceiver(channel, obj) {
	ipcRenderer.on(channel,async (ev, message)=>{
		let res=await obj[message.call](...message.args);
		ipcRenderer.send(channel,{
			id: message.id,
			response: res
		});
	});
}

function createIpcRendererProxy(channel) {
	return new Proxy({},{
		get: (target, prop, receiver)=>{
			return async (...args)=>{
				return await ipcRenderer.invoke(channel,{
					call: prop,
					args: args
				});
			};
		}
	});
}


function createIpcMainReceiver(channel, obj) {
	ipcMain.handle(channel,async (ev, data)=>{
		return await obj[data.call](...data.args);
	});
}

function createIpcMainProxy(channel, win) {
	let id=0;
	let promises={};

	ipcMain.on(channel,(ev, message)=>{
		if (message.hasOwnProperty("response")) {
			promises[message.id].resolve(message.response);
		}
	});

	return new Proxy({},{
		get: (target, prop, receiver)=>{
			return (...args)=>{
				id++;
				let promise=createMethodPromise();
				promises[id]=promise;

				win.webContents.send(channel,{
					id: id,
					call: prop,
					args: args
				})

				return promise;
			};
		}
	});
}

module.exports={
	createIpcRendererProxy,
	createIpcRendererReceiver,
	createIpcMainProxy,
	createIpcMainReceiver
};
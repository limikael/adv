const {ipcRenderer, ipcMain}=require("electron");

function createMethodPromise() {
	let resolve,reject;

	let p=new Promise((argResolve,argReject)=>{
		resolve=argResolve;
		reject=argReject;
	});

	p.resolve=resolve;
	p.reject=reject;

	return p;
}

function createIpcRendererReceiver(channel, obj) {
	ipcRenderer.on(channel,async (ev, message)=>{
		let res=await obj[message.call](...message.args);
		ipcRenderer.send(channel,{
			id: message.id,
			response: res
		});
	});
}

function createIpcAppProxy(win, channel) {
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
	createIpcRendererReceiver,
	createIpcAppProxy
};
const {app, BrowserWindow, Menu, dialog, ipcMain}=require("electron");
const {createIpcAppProxy}=require("../utils/electron-util.js");
const fs=require("fs");
const prompt=require("electron-prompt");

app.whenReady().then(()=>{
	let win=new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

	let appProxy=createIpcAppProxy(win, "advide");
	win.loadFile("res/advide.html");

	win.setTitle("Advide - Untitled");

	let fileFilters=[{
		name: "Advide Stories",
		extensions: ["yaml"]
	},{
		name: 'All Files',
		extensions: ['*'] 
	}];

	let menu=Menu.buildFromTemplate([{
		label: "File",
		submenu: [{
			label: "New Story",
			click: ()=>{
				appProxy.setSource("");
			}
		},{
			label: "Open Story...",
			click: async ()=>{
				let fileInfo=await dialog.showOpenDialog(win,{
					properties: ['openFile'],
					filters: fileFilters
				});

				if (!fileInfo.canceled && fileInfo.filePaths.length) {
					let fn=fileInfo.filePaths[0];
					let source=fs.readFileSync(fn,"utf-8");
					appProxy.setSource(source);
				}
			}
		},/*{
			label: "Save"
		},*/{
			label: "Save As...",
			click: async ()=>{
				let fileInfo=await dialog.showSaveDialog(win,{
					filters: fileFilters
				});

				if (!fileInfo.canceled && fileInfo.filePath) {
					let fn=fileInfo.filePath;
					let source=await appProxy.getSource();
					fs.writeFileSync(fn,source);
				}
			}

		},{
			type: 'separator'
		},{
			role: "quit"
		}]
	},{
		label: "Debug",
		submenu: [{
			label: "Open DevTools",
			click: ()=>{
				win.webContents.openDevTools();
			}
		}]
	}])

	Menu.setApplicationMenu(menu);
});
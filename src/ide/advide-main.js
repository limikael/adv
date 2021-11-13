const {app, BrowserWindow, Menu, dialog, ipcMain}=require("electron");
const prompt=require("electron-prompt");
const AdvideMain=require("./AdvideMain.js");

app.whenReady().then(()=>{
	let main=new AdvideMain(app);

	let menu=Menu.buildFromTemplate([{
		label: "File",
		submenu: [{
			label: "New Story",
			click: main.newStory
		},{
			label: "Open Story...",
			click: main.openStory
		},{
			label: "Save",
			accelerator: "Ctrl+S",
			click: main.saveStory
		},{
			label: "Save As...",
			click: main.saveStoryAs
		},{
			type: 'separator'
		},{
			role: "quit"
		}]
	},{
		label: "Debug",
		submenu: [{
			label: "Open DevTools",
			click: main.openDevTools
		}]
	}])

	Menu.setApplicationMenu(menu);
});
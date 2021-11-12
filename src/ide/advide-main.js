const {app, BrowserWindow, Menu, dialog} = require('electron');

app.whenReady().then(()=>{
	let win=new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    //win.webContents.openDevTools();
	win.loadFile("res/advide.html");

	let menu=Menu.buildFromTemplate([{
		label: "File",
		submenu: [{
			label: "New Story",
			click: ()=>{console.log("hello..."); win.webContents.send("message",{message: "new"})}
		},{
			label: "Open Story...",
			click: ()=>{
				dialog.showOpenDialog({
					properties: ['openFile'],
					filters: [{
						name: "Advide Stories",
						extensions: ["yaml"]
					},{
						name: 'All Files',
						extensions: ['*'] 
					}]
				});
			}
		},{
			label: "Save"
		},{
			label: "Save As..."
		},{
			type: 'separator'
		},{
			role: "quit"
		}]
	}])

	Menu.setApplicationMenu(menu);
});
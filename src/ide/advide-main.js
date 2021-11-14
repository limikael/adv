const {app, BrowserWindow}=require("electron");

app.whenReady().then(()=>{
	let win=new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		}
	});

	win.loadFile("res/advide.html");
	win.setMenu(null);

	Menu.setApplicationMenu(menu);
});
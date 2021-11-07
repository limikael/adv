const { app, BrowserWindow } = require('electron');

app.whenReady().then(()=>{
	let win=new BrowserWindow();
	win.loadFile("res/advide.html");
});
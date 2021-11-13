const {BrowserWindow, dialog}=require("electron");
const {createIpcMainProxy, createIpcMainReceiver}=require("../utils/electron-util.js");
const fs=require("fs");
const path=require('path');

class AdvideMain {
	constructor(app) {
		this.app=app;
		this.win=new BrowserWindow({
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false,
			}
		});

		this.win.on("close",this.onWindowClose);

		this.receiver=createIpcMainReceiver("advide",this);
		this.proxy=createIpcMainProxy("advide",this.win);
		this.win.loadFile("res/advide.html");

		this.fileFilters=[{
			name: "Advide Stories",
			extensions: ["yaml"]
		},{
			name: 'All Files',
			extensions: ['*'] 
		}];

		this.fileName=null;
		this.sourceChange=false;
		this.updateWindowTitle();
	}

	onWindowClose=async (ev)=>{
		if (this.closing)
			return;

		ev.preventDefault();
		this.closing=true;

		if (await this.checkClose())
			this.win.close();

		this.closing=false;
	}

	updateWindowTitle() {
		let useName=this.getShowFileName();
		if (this.sourceChange)
			useName+=" *";

		this.win.setTitle("Advide - "+useName);
	}

	getShowFileName() {
		let useName="Untitled";

		if (this.fileName)
			useName=path.basename(this.fileName);

		return useName;
	}

	async checkClose() {
		if (!this.sourceChange)
			return true;

		let box=await dialog.showMessageBox(this.win,{
			message: "Save changes to "+this.getShowFileName()+" before closing?",
			type: "warning",
			buttons: ["Close without saving","Cancel","Save"]
		});

		switch (box.response) {
			case 0:
				return true;

			case 1:
				return false;

			case 2:
				return await this.saveStory();
		}
	}

	newStory=async ()=>{
		if (!await this.checkClose())
			return;

		await this.proxy.setSource("");
		this.fileName=null;
		await this.clearSourceChange();
	}

	openStory=async ()=>{
		if (!await this.checkClose())
			return;

		let fileInfo=await dialog.showOpenDialog(this.win,{
			properties: ['openFile'],
			filters: this.fileFilters
		});

		if (!fileInfo.canceled && fileInfo.filePaths.length) {
			let fn=fileInfo.filePaths[0];
			let source=fs.readFileSync(fn,"utf-8");
			await this.proxy.setSource(source);
			this.fileName=fn;
			await this.clearSourceChange();
		}
	}

	saveStory=async ()=>{
		if (!this.fileName)
			return await this.saveStoryAs();

		let source=await this.proxy.getSource();
		fs.writeFileSync(this.fileName,source);
		await this.clearSourceChange();
		return true;
	}

	saveStoryAs=async ()=>{
		let fileInfo=await dialog.showSaveDialog(this.win,{
			filters: this.fileFilters
		});

		if (fileInfo.canceled)
			return false;

		if (!fileInfo.canceled && fileInfo.filePath) {
			let fn=fileInfo.filePath;
			let source=await this.proxy.getSource();
			fs.writeFileSync(fn,source);
			this.fileName=fn;
			await this.clearSourceChange();
			return true;
		}
	}

	openDevTools=async ()=>{
		this.win.webContents.openDevTools();
	}

	async clearSourceChange() {
		this.sourceChange=false;
		await this.proxy.clearSourceChange();
		this.updateWindowTitle();
	}

	notifySourceChange() {
		this.sourceChange=true;
		this.updateWindowTitle();
	}
}

module.exports=AdvideMain;
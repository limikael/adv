import {saveAs} from "file-saver";

async function selectAndLoadFile() {
	return new Promise((resolve, reject)=>{
		let input=document.createElement("input");
		input.type="file";
		input.style.display="none";
		document.body.appendChild(input);
		let resolved;

		function done(result) {
			resolved=true;
			document.body.removeChild(input);
			resolve(result);
		}

		function windowFocus() {
			setTimeout(()=>{
				console.log("window focus...");

				if (!resolved)
					done(undefined);
			},250);
		}

		input.addEventListener("change",()=>{
			if (resolved)
				return;

			//console.log("file input change...");
			resolved=true;

			window.removeEventListener("focus",windowFocus);

			let reader=new FileReader();
			reader.onload=()=>{
				done(reader.result);
			}
			reader.readAsText(input.files[0]);
		},{once: true});

		window.addEventListener("focus",windowFocus,{once: true});

		input.click();
	});
}

export default class DocFile {
	constructor() {
		this.blobOptions=null;
	}

	supportsFileSystemAccess() {
		if (window.showOpenFilePicker===undefined)
			return false;

		return true;
	}

	async open() {
		if (this.supportsFileSystemAccess()) {
			let [handle]=await window.showOpenFilePicker();
			let content=await (await handle.getFile()).text();

			console.log(handle);

			this.handle=handle;

			return content;
		}

		else {
			return await selectAndLoadFile();
		}
	}

	async saveAs(content) {
		if (this.supportsFileSystemAccess()) {
			let handle=await window.showSaveFilePicker();

			if (handle) {
				this.handle=handle;
				let writable=await handle.createWritable();
				await writable.write(content);
				await writable.close();
				return true;
			}
		}

		else {
			let blob=new Blob([content],this.blobOptions);
			saveAs(blob,this.defaultFileName);
			return true;
		}
	}

	async save(content) {
		if (!this.handle)
			return await this.saveAs(content);

		let writable=await this.handle.createWritable();
		await writable.write(content);
		await writable.close();
		return true;
	}

	clear() {
		this.handle=null;
	}

	getFileName() {
		if (this.handle)
			return this.handle.name;

		return this.defaultFileName;
	}
}
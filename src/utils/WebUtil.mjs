import yaml from "yaml";

export async function fetchEx(url, options={}) {
	let res,fetchRes;

	try {
		fetchRes=await fetch(url,{
			method: "GET"
		});

		switch (options.parse) {
			case "yaml":
				res=await fetchRes.text();
				res=yaml.parse(res);
				break;

			case "json":
				res=await fetchRes.json();
				break;

			default:
				res=await fetchRes.text();
				break;
		}
	}

	catch (e) {
		console.log(e);
		throw e;
	}

	if (fetchRes.status!=200)
		throw new Error(res.message);

	return res;
}

export function linkify(text, processor) {
	text=String(text);
	/*console.log(text);
	console.log(typeof text);*/

	let m=text.match(/(^.*)\[([^\*]*)\](.*$)/);

	if (!m)
		m=text.match(/(^.*)\*([^\*]*)\*(.*$)/);

	if (!m)
		return [text];

	return [...linkify(m[1],processor),processor(m[2]),...linkify(m[3],processor)];
}

export async function selectAndLoadFile() {
	return new Promise((resolve, reject)=>{
		let input=document.createElement("input");
		input.type="file";
		input.style.display="none";
		document.body.appendChild(input);

		function done(result) {
			document.body.removeChild(input);
			resolve(result);
		}

		function windowFocus() {
			done(undefined);
		}

		input.addEventListener("change",()=>{
			window.removeEventListener("focus",windowFocus);

			let reader=new FileReader();
			reader.onload=()=>{
				done({
					name: input.files[0].name,
					value: reader.result
				});
			}
			reader.readAsText(input.files[0]);
		},{once: true});

		window.addEventListener("focus",windowFocus,{once: true});

		input.click();
	});
}
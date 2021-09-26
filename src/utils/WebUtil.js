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

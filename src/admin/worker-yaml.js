import yaml from "yaml";

function parseYaml(source, reviver) {
	try {
		yaml.parse(source,{
			prettyErrors: true
		})
	} 

	catch (error) {
		throw {
			name:    error.name,
			message: error.message,
			at:      error.range.start,
			text:    source
		}
	}
}

navigator.parseYaml=parseYaml;

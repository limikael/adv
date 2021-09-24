import yaml from "js-yaml";

function parseYaml(source, reviver) {
    try {
        yaml.load(source)
    } 

    catch (error) {
        if (error instanceof yaml.YAMLException) {
            throw {
                name:    'SyntaxError',
                message: error.message,
                at:      error.mark.position,
                text:    source
            }
        }
    }
}

navigator.parseYaml=parseYaml;

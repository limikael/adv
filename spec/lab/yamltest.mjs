import fs from "fs";
import yaml from "js-yaml";

let doc=yaml.load(fs.readFileSync("./spec/lab/test.yaml"));
console.log(JSON.stringify(doc," ",2));
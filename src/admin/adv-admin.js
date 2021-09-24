import setupYamlMode from "./mode-yaml.js";

jQuery(function($) {
	if (document.getElementById("editor-adv-content")) {
		setupYamlMode(ace);

		let editor=ace.edit("editor-adv-content",{
			mode: "ace/mode/yaml",
			theme: 'ace/theme/sqlserver',
		});

		editor.getSession().setValue($("[name=adv-content]").val());
		editor.getSession().on('change', function(){
			$("[name=adv-content]").val(editor.getSession().getValue());
		});
	}

	console.log("yup...");	
});


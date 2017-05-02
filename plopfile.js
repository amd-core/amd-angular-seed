module.exports = function (plop) {
	
	const SourceRoot = 'src/app';
	const TemplateRoot = 'plop-templates';

	const ComponentTemplateRoot = `${TemplateRoot}/component`;

	plop.setGenerator('component', {
		description: 'Generates an Angular Component',

		prompts: [{
			type: 'input',
			name: 'name',
			message: 'Component name:',
			validate: function (value) {
				if ((/.+/).test(value)) { return true; }
				return 'Component name is required';
			}
		}, {
			type: 'input',
			name: 'folder-name',
			message: `Folder name (relative to src/app, use '.' for top level'):`,
			validate: function (value) {
				if ((/.+/).test(value)) { return true; }
				return 'Folder name is required';
			}
		}],

		actions: [{
			type: 'add',
			path: `${SourceRoot}/{{dashCase folder-name}}/{{dashCase name}}/{{dashCase name}}.component.ts`,
			templateFile: `${ComponentTemplateRoot}/component.ts.template`
		}, {
			type: 'add',
			path: `${SourceRoot}/{{dashCase folder-name}}/{{dashCase name}}/{{dashCase name}}.component.html`,
			templateFile: `${ComponentTemplateRoot}/component.html.template`
		}, {
			type: 'add',
			path: `${SourceRoot}/{{dashCase folder-name}}/{{dashCase name}}/{{dashCase name}}.component.scss`,
			templateFile: `${ComponentTemplateRoot}/component.scss.template`
		}, {
			type: 'add',
			path: `${SourceRoot}/{{dashCase folder-name}}/{{dashCase name}}/{{dashCase name}}.module.ts`,
			templateFile: `${ComponentTemplateRoot}/component.module.template`
		}, {
			type: 'add',
			path: `${SourceRoot}/{{dashCase folder-name}}/{{dashCase name}}/index.ts`,
			templateFile: `${ComponentTemplateRoot}/component.index.template`
		}]
	});
};
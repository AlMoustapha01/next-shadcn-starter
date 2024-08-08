/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Generate a new component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What's the component name ? ",
    },
    {
      type: "confirm",
      name: "style",
      default: "y",
      message: "Do you want a style file in your component ?",
    },
    {
      type: "confirm",
      name: "test",
      default: "y",
      message: "Do you want a test file in your component ?",
    },
    {
      type: "input",
      name: "path",
      message: "What is the path of your component ? (default: components/ui)",
      default: "src/components/ui",
    },
  ],
  actions: (answer) => {
    return [
      {
        type: "add",
        path: answer.path + "/{{kebabCase name}}/index.ts",
        templateFile: ".plop/template/index.ts.hbs",
      },
      {
        type: "add",
        path: answer.path + "/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: ".plop/template/component.tsx.hbs",
      },
      {
        type: "add",
        path:
          answer.path + "/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
        templateFile: ".plop/template/component.stories.tsx.hbs",
      },
      answer.style && {
        type: "add",
        path:
          answer.path + "/{{kebabCase name}}/{{kebabCase name}}.module.scss",
        templateFile: ".plop/template/component.module.scss.hbs",
      },
      answer.test && {
        type: "add",
        path: answer.path + "/{{kebabCase name}}/{{kebabCase name}}.spec.tsx",
        templateFile: ".plop/template/component.spec.tsx.hbs",
      },
    ];
  },
};

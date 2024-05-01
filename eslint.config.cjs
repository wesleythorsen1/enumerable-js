const globals = require("globals");

const { FlatCompat } = require("@eslint/eslintrc");
const pluginJs = require("@eslint/js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

module.exports = [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  ...compat.extends("standard"),
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:prettier/recommended"),
  ...compat.extends("eslint-config-prettier"),
];

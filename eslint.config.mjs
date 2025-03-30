import globals from "globals";
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    plugins: { js, react: reactPlugin },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
    },
  },
];

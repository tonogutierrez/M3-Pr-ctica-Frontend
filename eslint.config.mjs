import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { js, react: reactPlugin },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.test.js"], // ✅ Aplica esta configuración solo a los archivos de test
    languageOptions: {
      globals: globals.browser,
    },
    env: { jest: true }, // ✅ Habilita Jest en ESLint
  },
];

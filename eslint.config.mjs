import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // 🔹 Globales del navegador
      },
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
    files: ["**/*.test.js"], // ✅ Se aplica solo a los archivos de test
    languageOptions: {
      globals: {
        ...globals.browser, // 🔹 Mantiene los globales del navegador
        test: "readonly", // 🔹 Define `test` como global de solo lectura
        expect: "readonly", // 🔹 Define `expect` como global de solo lectura
      },
    },
  },
];

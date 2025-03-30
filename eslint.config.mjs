import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules, // Usa las reglas recomendadas
      ...pluginReact.configs.recommended.rules, // Usa las reglas recomendadas de React
    },
  },
];

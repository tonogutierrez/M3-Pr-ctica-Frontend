import js from "@eslint/js"; // ✅ Importa ESLint estándar
import globals from "globals"; // ✅ Importa `globals`
import reactPlugin from "eslint-plugin-react"; // ✅ Importa el plugin de React

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
      react: { version: "detect" }, // 🔹 Detecta automáticamente la versión de React
    },
    rules: {
      ...js.configs.recommended.rules, // 🔹 Reglas recomendadas de ESLint
      ...reactPlugin.configs.recommended.rules, // 🔹 Reglas recomendadas de React
    },
  },
];

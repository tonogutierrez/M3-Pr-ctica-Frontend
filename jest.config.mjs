export default {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest", // Usa babel-jest para transformar archivos JS y JSX
    },
    extensionsToTreatAsEsm: [".js", ".jsx"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "^axios$": "<rootDir>/node_modules/axios/index.js"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)", // 🚀 Indica que Jest debe transformar axios
    ],
  };
  
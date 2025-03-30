export default {
    transform: {},
    extensionsToTreatAsEsm: [".js", ".jsx"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "^axios$": "<rootDir>/node_modules/axios/index.js"
    },
    globals: {
      "ts-jest": {
        useESM: true
      }
    }
  };
  
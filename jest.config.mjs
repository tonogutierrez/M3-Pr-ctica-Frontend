export default {
    transform: {},
    extensionsToTreatAsEsm: [".js", ".jsx", ".ts", ".tsx"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "axios": "<rootDir>/node_modules/axios/index.js"
    },
  };
  
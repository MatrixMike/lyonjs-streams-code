"use strict";

module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    es6: true
  },
  rules: {
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "ignore",
      exports: "ignore",
      functions: "ignore",
    }]
  }
};
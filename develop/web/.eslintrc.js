module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-console": [
      "error", { 
        "allow": ["warn", "error"] 
      }
    ],
    "rules": {
      "mocha/no-exclusive-tests": "error"
    }
  },
  "globals": {
    // gmail api
    "gapi": false,

    "require": false,
    "process": false,
    "WebComponents": false,
    "module": false,
    "__dirname": false,

    // mocha
    "describe": false,
    "before": false,
    "after": false,
    "beforeEach": false,
    "it": false,

    // test helper
    "gmailComponents": false
  }
}

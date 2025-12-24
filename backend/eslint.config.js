module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: "latest", // Allows modern ECMAScript features
    sourceType: "module", // Allows import/export syntax
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // TypeScript rules
    "plugin:prettier/recommended", // Enables prettier plugin
  ],
  rules: {
    "prettier/prettier": "error", // Show prettier errors as ESLint errors
    // your custom rules
  },
};

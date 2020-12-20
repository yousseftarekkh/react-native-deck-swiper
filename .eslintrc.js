module.exports = {
  root: true,
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": ["error"],
    curly: [2, "multi-line"],
  },
};

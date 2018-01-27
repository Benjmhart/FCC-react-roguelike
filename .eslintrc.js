module.exports = {
  extends: ["airbnb", "prettier", "prettier/react", "prettier/standard"],
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0
  }
};

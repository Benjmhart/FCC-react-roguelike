module.exports = {
  extends: ["airbnb", "eslint:recommended", "plugin:react-redux/recommended", "prettier", "prettier/react", "prettier/standard"],
  plugins: ["react", "jsx-a11y", "prettier", "import", "react-redux" ],
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0
  }
};

module.exports = {
  extends: "stylelint-config-primer",
  rules: {
    // stylelint-config-primer dropped these rules from v11
    indentation: 2,
    "string-quotes": "double",
    "value-list-comma-newline-after": "always-multi-line",
    // allow css-gradients, which is not allowed by default
    "plugin/no-unsupported-browser-features": [true, {
      severity: "error",
      ignore: ["css-gradients"],
    }],
  },
};

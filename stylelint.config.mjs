const config = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  rules: {
    'color-no-hex': true,
  },
  overrides: [
    {
      files: ['src/styles/tokens.css'],
      rules: {
        'color-no-hex': null,
      },
    },
  ],
};

export default config;

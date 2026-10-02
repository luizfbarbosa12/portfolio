const config = {
  '*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}': ['eslint --fix', 'prettier --write'],
  '*.{css,module.css}': ['stylelint --fix', 'prettier --write'],
  '*.{json,jsonc,md,mdx,yaml,yml}': 'prettier --write',
};

export default config;

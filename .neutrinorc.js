const reactComponents = require('@neutrinojs/react-components');
const airbnb = require('@neutrinojs/airbnb');

module.exports = {
  use: [
    airbnb({
      eslint: {
        baseConfig: {
          extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'prettier',
          ],
          rules: {
            'react/jsx-filename-extension': [
              1,
              { extensions: ['.js', '.jsx'] },
            ],
            'import/prefer-default-export': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/jsx-wrap-multilines': 'off',
            'react/forbid-prop-types': 'off',
            'no-param-reassign': 'off',
            'no-prototype-builtins': 'off',
            'max-classes-per-file': 'off',
            'react/jsx-curly-newline': 'off',
          },
          overrides: {
            files: ['**/*.stories.*'],
            rules: {
              'react/prop-types': 'off',
            },
          },
        },
      },
    }),
    reactComponents(),
  ],
};

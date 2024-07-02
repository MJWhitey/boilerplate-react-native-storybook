/** @type{import("@storybook/react-webpack5").StorybookConfig} */

import custom from '../webpack.config.js'; // 👈 Custom Webpack configuration being imported.

module.exports = {
  stories: ['../components/**/*.stories.?(ts|tsx|js|jsx)'],

  webpackFinal: async (config) => {
    return {
      ...config,
      module: { ...config.module, rules: [...config.module.rules, ...custom.module.rules] },
    };
  },

  staticDirs: ['../assets',],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},

  typescript: {
    //reactDocgen: 'react-docgen-typescript'
    reactDocgen: 'none'
  }
  
};

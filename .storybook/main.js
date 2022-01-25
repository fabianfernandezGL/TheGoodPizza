const ThemeColors = require('../src/styles/theme')
const { white, yellow } = ThemeColors.theme.colors

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less'],
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/i,
      use: [
        // compiles Less to CSS
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                '@primary-color': yellow.DEFAULT, // primary color for all components
                '@link-color': white.DEFAULT, // '#1890ff', // link color: ;
                '@success-color': '#52c41a', // success state color
                '@warning-color': '#faad14', // warning state color
                '@error-color': '#f5222d', // error state color
                '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
                '@text-color': 'rgba(0, 0, 0, 0.65)', // major text color
                '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
                '@disabled-color': '#333333', // disable state color
              },
              javascriptEnabled: true,
            },
          },
        },
      ],
    })

    return config
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}

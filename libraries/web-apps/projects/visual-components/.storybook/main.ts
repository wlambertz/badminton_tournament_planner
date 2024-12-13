import type { StorybookConfig } from '@storybook/angular'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: [{ from: '../src/assets/fonts', to: '/assets/fonts' },
    {from: '../src/assets/images', to: '/assets/images' },],
}
export default config

import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  framework: '@storybook/sveltekit',
  stories: [
    '../src/**/*.mdx',
    '../src/lib/components/**/stories/*.stories.@(js|ts|svelte)'
  ],
  addons: [
    '@storybook/addon-svelte-csf',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  // docs: {
  //   autodocs: 'tag',
  // },
};
export default config;
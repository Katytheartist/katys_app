import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  viteFinal: (config) => {
    config.css = {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }
    return config;
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;

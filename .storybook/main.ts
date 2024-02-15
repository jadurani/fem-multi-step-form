import type { StorybookConfig } from "@storybook/nextjs";

const path = require("path");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // @ts-ignore: Object is possibly 'null'.
    config.resolve.alias = {
      // @ts-ignore: Object is possibly 'null'.
      ...config.resolve.alias,
      "@assets": path.resolve(__dirname, "../public/"),
      "@app": path.resolve(__dirname, "../src/app/"),
      "@api": path.resolve(__dirname, "../src/app/api"),
      "@tests": path.resolve(__dirname, "../src/tests/"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@lib": path.resolve(__dirname, "../src/lib/"),
      "@styles": path.resolve(__dirname, "../src/styles/"),
    };
    return config;
  },
};
export default config;

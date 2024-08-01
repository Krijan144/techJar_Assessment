const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/ui/component/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/ui/container/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
  ],
  framework: {
    name: "@storybook/react",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

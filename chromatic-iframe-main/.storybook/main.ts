import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/nextjs",
  core: {
    disableTelemetry: true,
  },
};

export default config;

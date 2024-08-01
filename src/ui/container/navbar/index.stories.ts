import type { Meta, StoryObj } from "@storybook/react";

import Navbar from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Navbar> = {
  title: "Container/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

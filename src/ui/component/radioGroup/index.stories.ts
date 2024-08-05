import type { Meta, StoryObj } from "@storybook/react";

import Radio from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Radio> = {
  title: "Component/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Radio>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: [
      { id: "1", name: "test", value: "t1" },
      { id: "2", name: "test2", value: "t2" },
    ],
  },
};

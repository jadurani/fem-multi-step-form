import { Meta, StoryObj } from "@storybook/react";
import AddOnOption from "./AddOnOption";

export default {
  component: AddOnOption,
  title: "Components/AddOnOption",
  decorators: [
    (Story) => (
      <div className="bg-purple">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof AddOnOption>;

export const Active: Story = {
  args: {
    step: 1,
    title: "Your Info",
    isActive: true,
  },
};

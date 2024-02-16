import { Meta, StoryObj } from "@storybook/react";
import FormStep from "./FormStep";

export default {
  component: FormStep,
  title: "Components/FormStep",
  decorators: [
    (Story) => (
      <div className="bg-purple">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof FormStep>;

export const Active: Story = {
  args: {
    step: 1,
    title: "Your Info",
    isActive: true,
  },
};

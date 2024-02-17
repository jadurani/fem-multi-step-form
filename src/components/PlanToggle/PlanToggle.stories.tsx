import { Meta, StoryObj } from "@storybook/react";
import PlanToggle from "./PlanToggle";

export default {
  component: PlanToggle,
  title: "Components/PlanToggle",
  decorators: [
    (Story) => (
      <div className="bg-white p-16">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof PlanToggle>;

export const Monthly: Story = {
  args: {
    value: "monthly",
  },
};

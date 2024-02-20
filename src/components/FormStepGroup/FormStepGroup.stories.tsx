import { Meta, StoryObj } from "@storybook/react";
import FormStepGroup from "./FormStepGroup";

export default {
  component: FormStepGroup,
  title: "Components/FormStepGroup",
  decorators: [
    (Story) => (
      <div className="bg-purple">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof FormStepGroup>;

export const StepOne: Story = {
  args: {
    activeStep: 1,
  },
};

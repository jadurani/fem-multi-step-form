import { Meta, StoryObj } from "@storybook/react";
import FormFinished from "./FormFinished";

export default {
  component: FormFinished,
  title: "FormSteps/FormFinished",
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof FormFinished>;

export const Default: Story = {};

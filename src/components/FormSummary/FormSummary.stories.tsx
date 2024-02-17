import { Meta, StoryObj } from "@storybook/react";
import FormSummary from "./FormSummary";

export default {
  component: FormSummary,
  title: "FormSteps/FormSummary",
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof FormSummary>;

export const Default: Story = {};

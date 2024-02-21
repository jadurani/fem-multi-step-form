import { Meta, StoryObj } from "@storybook/react";
import FormPickAddOn from "./FormPickAddOn";

export default {
  component: FormPickAddOn,
  title: "FormSteps/FormPickAddOn",
} as Meta;

type Story = StoryObj<typeof FormPickAddOn>;

export const Default: Story = {
  args: {
    online: false,
    storage: false,
    profile: false,
  },
};

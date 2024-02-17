import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

export default {
  component: InputField,
  title: "Components/InputField",
  argTypes: {
    type: {
      options: ["email", "text", "tel"],
    },
  },
} as Meta;

type Story = StoryObj<typeof InputField>;

export const Name: Story = {
  args: {
    type: "text",
    value: "hello",
  },
  render: function Render(args) {
    const [{ type, value }, updateArgs] = useArgs();

    function onChange(newValue: string) {
      console.log(newValue);
      updateArgs({ value: newValue });
    }

    return (
      <InputField
        {...args}
        type={type}
        value={value}
        onChange={(v) => onChange(v)}
      />
    );
  },
};

export const Email: Story = {
  args: {
    type: "email",
    value: "",
  },
  render: function Render(args) {
    const [{ type, value }, updateArgs] = useArgs();

    function onChange(newValue: string) {
      console.log(newValue);
      updateArgs({ value: newValue });
    }

    return (
      <InputField
        {...args}
        type={type}
        value={value}
        onChange={(v) => onChange(v)}
      />
    );
  },
};

export const PhoneNumber: Story = {
  args: {
    type: "tel",
    value: "",
  },
  render: function Render(args) {
    const [{ type, value }, updateArgs] = useArgs();

    function onChange(newValue: string) {
      console.log(newValue);
      updateArgs({ value: newValue });
    }

    return (
      <InputField
        {...args}
        type={type}
        value={value}
        onChange={(v) => onChange(v)}
      />
    );
  },
};

import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";
import AddOnOption, { OptionType } from "./AddOnOption";

export default {
  component: AddOnOption,
  title: "Components/AddOnOption",
} as Meta;

type Story = StoryObj<typeof AddOnOption>;

export const Unselected: Story = {
  args: {
    checked: false,
    id: "online",
    title: "Online service",
    subtitle: "Access to multiplayer games",
    price: 10,
    handleClick: (id: OptionType, value: boolean) =>
      console.log(`${id}: ${value}`),
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange(id: OptionType, checked: boolean) {
      console.log(id, checked);
      updateArgs({ checked });
    }

    return (
      <AddOnOption
        {...args}
        checked={checked}
        handleClick={(id, checked) => onChange(id, checked)}
      />
    );
  },
};

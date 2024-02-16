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
};
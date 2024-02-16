import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

type Story = StoryObj<typeof Button>;

export const Denim: Story = {
  args: {
    children: "Next Step",
    color: "denim",
    handleClick: () => console.log("clicked"),
  },
};

export const Purple: Story = {
  args: {
    children: "Confirm",
    color: "purple",
    handleClick: () => console.log("clicked"),
  },
};

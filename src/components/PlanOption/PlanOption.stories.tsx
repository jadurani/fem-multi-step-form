import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";
import PlanOption, { PlanOptionType } from "./PlanOption";

export default {
  component: PlanOption,
  title: "Components/PlanOption",
  decorators: [
    (Story) => (
      <div className="bg-white p-16">
        <Story />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof PlanOption>;

export const Arcade: Story = {
  args: {
    checked: false,
    id: "arcade",
    handleClick: (id: PlanOptionType, value: boolean) =>
      console.log(`${id}: ${value}`),
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    function onChange(id: PlanOptionType, checked: boolean) {
      console.log(id, checked);
      updateArgs({ checked });
    }

    return (
      <PlanOption
        {...args}
        checked={checked}
        handleClick={(id, checked) => onChange(id, checked)}
      />
    );
  },
};

import { Meta, StoryObj } from "@storybook/angular";
import { BtnComponent } from "../lib/btn/btn.component";

export default {
  title: "MyLibrary/ExtendedBtnComponent",
  component: BtnComponent,
} as Meta;

type Story = StoryObj<BtnComponent>;

export const Primary: Story = {
  args: {
    buttonType: 'primary'
  },
};
export const Secondary: Story = {
  args: {
    buttonType: 'secondary'
  },
};
export const Link: Story = {
  args: {
    buttonType: 'link'
  },
};


import { Meta, StoryObj } from '@storybook/angular';
import { ExtendedBtnComponent } from '../lib/extended-btn/extended-btn.component';

export default {
  title: 'MyLibrary/ExtendedBtnComponent',
  component: ExtendedBtnComponent,
} as Meta;

type Story = StoryObj<ExtendedBtnComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

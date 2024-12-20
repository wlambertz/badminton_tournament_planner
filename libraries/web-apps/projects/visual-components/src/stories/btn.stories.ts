import { Meta, StoryObj } from '@storybook/angular'
import { BtnComponent, BtnType } from '../lib/btn/btn.component'

export default {
  title: 'MyLibrary/BtnComponent',
  component: BtnComponent,
} as Meta

type Story = StoryObj<BtnComponent>

export const Primary: Story = {
  args: {
    buttonType: BtnType.primary,
    label: 'Test',
    onClick: () => {
      console.log('clicked')
    },
  },
}
export const PrimaryIcon: Story = {
  args: {
    buttonType: BtnType.primary,
    label: 'Test',
    icon: 'rocket',
  },
}
export const Secondary: Story = {
  args: {
    buttonType: BtnType.secondary,
  },
}
export const Accent: Story = {
  args: {
    buttonType: BtnType.accent,
  },
}

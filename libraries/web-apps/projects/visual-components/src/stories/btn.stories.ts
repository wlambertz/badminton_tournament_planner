import { Meta, StoryObj } from '@storybook/angular'
import { BtnComponent } from '../lib/btn/btn.component'

export default {
  title: 'MyLibrary/ExtendedBtnComponent',
  component: BtnComponent,
} as Meta

type Story = StoryObj<BtnComponent>

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    label: 'Test',
    onClick: () => {
      console.log('clicked')
    },
  },
}
export const PrimaryIcon: Story = {
  args: {
    buttonType: 'primary',
    label: 'Test',
    icon: 'rocket',
  },
}
export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
  },
}

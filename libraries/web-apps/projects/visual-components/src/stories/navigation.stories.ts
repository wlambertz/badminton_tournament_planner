import { Meta, StoryObj } from '@storybook/angular'
import { NavigationComponent } from '../lib/navigation/navigation.component'

export default {
  title: 'MyLibrary/Navigation',
  component: NavigationComponent,
} as Meta

type Story = StoryObj<NavigationComponent>

export const Default: Story = {
  args: {},
}

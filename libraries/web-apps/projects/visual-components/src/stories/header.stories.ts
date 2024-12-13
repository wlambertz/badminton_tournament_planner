import { Meta, StoryObj } from '@storybook/angular'
import { HeaderComponent } from '../lib/header/header.component'

export default {
  title: 'MyLibrary/Header',
  component: HeaderComponent,
} as Meta

type Story = StoryObj<HeaderComponent>

export const Default: Story = {
  args: {},
}

import { applicationConfig, Meta, StoryObj } from '@storybook/angular'
import { NavigationComponent } from '../lib/navigation/navigation.component'
import { provideAnimations } from '@angular/platform-browser/animations'

export default {
  title: 'MyLibrary/NavigationComponent',
  component: NavigationComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
} as Meta

type Story = StoryObj<NavigationComponent>

export const Default: Story = {
  args: { devMode: true },
}

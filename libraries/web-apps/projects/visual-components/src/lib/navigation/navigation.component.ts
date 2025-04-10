import { Component, Input } from '@angular/core'
import { MatSidenavModule } from '@angular/material/sidenav'

@Component({
  selector: 'bt-vc-navigation',
  imports: [MatSidenavModule],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() devMode: boolean = false
}

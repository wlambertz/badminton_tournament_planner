import { Component } from '@angular/core'
import { NgClass } from '@angular/common'

@Component({
  selector: 'bt-comp-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected isHamburgerOpen: boolean = false
  protected toogleHamburger(): void {
    document.getElementById('hamburger')?.classList.toggle('is-active')
  }
}

import { Component, Input } from '@angular/core'
import { NgClass, NgOptimizedImage } from '@angular/common'

@Component({
    selector: 'bt-comp-header',
    imports: [NgClass, NgOptimizedImage],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected isHamburgerOpen: boolean = false
  @Input() logoPath?: string
  @Input() appName?: string
}

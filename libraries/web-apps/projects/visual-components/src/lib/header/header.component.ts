import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgClass } from '@angular/common'

@Component({
  selector: 'bt-vc-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected isHamburgerOpen: boolean = false
  @Output() toggleMenuCallback: EventEmitter<Event> = new EventEmitter()
  @Output() toggleSearchCallback: EventEmitter<Event> = new EventEmitter()
  @Input() title: string = 'Bad Tourn'

  protected toggleMenu(event: Event): void {
    event.stopPropagation()
    this.isHamburgerOpen = !this.isHamburgerOpen
    this.toggleMenuCallback.emit(event)
  }

  protected toggleSearch(event: Event): void {
    event.stopPropagation()
    this.toggleSearchCallback.emit()
  }
}

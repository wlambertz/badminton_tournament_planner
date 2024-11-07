import { Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'bt-comp-header',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected isHamburgerOpen: boolean = false
  @Input() logoPath?: string
}

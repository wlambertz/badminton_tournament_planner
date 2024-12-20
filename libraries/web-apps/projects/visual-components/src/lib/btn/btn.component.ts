import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common'

export enum BtnType {
  primary = 'primary',
  secondary = 'secondary',
  accent = 'accent',
}

@Component({
  selector: 'bt-vc-btn',
  imports: [MatButtonModule, MatIconModule, NgTemplateOutlet, NgIf, NgClass],
  templateUrl: './btn.component.html',
  standalone: true,
  styleUrls: [
    '../styles/_fonts.scss',
    '../styles/_icons.scss',
    './btn.component.scss',
  ],
})
export class BtnComponent implements OnInit {
  @Input() buttonType: BtnType = BtnType.secondary
  @Input() label?: string
  @Input() icon?: string
  @Output() onClick: EventEmitter<Event> = new EventEmitter()

  ngOnInit(): void {
    if (!this.label) this.label = 'click me!'
  }

  innerCallback(): void {
    this.onClick.emit()
  }

  protected readonly BtnType = BtnType
}

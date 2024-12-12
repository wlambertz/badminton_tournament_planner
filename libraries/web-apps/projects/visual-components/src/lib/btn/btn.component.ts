import { Component, Input, OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NgIf, NgTemplateOutlet } from '@angular/common'

@Component({
  selector: 'bt-comp-btn',
  imports: [MatButtonModule, MatIconModule, NgTemplateOutlet, NgIf],
  templateUrl: './btn.component.html',
  standalone: true,
  styleUrls: ['../styles/_fonts.scss', './btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() buttonType: string = 'secondary'
  @Input() label?: string
  @Input() icon?: string
  @Input() onClick?: () => void

  ngOnInit(): void {
    if (!this.label) this.label = 'click me!'
  }

  innerCallback(): void {
    if (this.onClick) this.onClick()
  }
}

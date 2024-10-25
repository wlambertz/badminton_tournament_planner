import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon"

@Component({
  selector: "bt-comp-btn",
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: "./btn.component.html",
  styleUrl: "./btn.component.scss",
})
export class BtnComponent implements OnInit{
  @Input() buttonType: string = 'secondary';
  @Input() label?: string;
  @Input() icon?: string;


  ngOnInit(): void {
    if (!this.label) this.label = 'click me!';
  }
}

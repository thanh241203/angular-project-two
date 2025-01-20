import { Component } from '@angular/core';
import { OnChangeComponent } from "./on-change/on-change.component";

@Component({
  selector: 'app-life-circle',
  standalone: true,
  imports: [OnChangeComponent],
  templateUrl: './life-circle.component.html',
  styleUrl: './life-circle.component.css'
})
export class LifeCircleComponent {

}

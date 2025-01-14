import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testta',
  standalone: true,
  imports: [],
  templateUrl: './testta.component.html',
  styleUrl: './testta.component.css'
})
export class TesttaComponent {

@Input()  name:string=''
}

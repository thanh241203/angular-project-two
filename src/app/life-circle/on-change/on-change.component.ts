import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-on-change',
  standalone: true,
  imports: [],
  templateUrl: './on-change.component.html',
  styleUrl: './on-change.component.css'
})
export class OnChangeComponent {
title : string ='OnChange Component';
@Input() message:string='Hello';

constructor(){
  console.log(this.message);
  console.log(this.title)
}
}

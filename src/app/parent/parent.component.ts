import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { TesttaComponent } from "../testta/testta.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, TesttaComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  @ViewChild('para') paraEl:ElementRef
  showParaValue(){
    console.log(this.paraEl.nativeElement)
  }
}

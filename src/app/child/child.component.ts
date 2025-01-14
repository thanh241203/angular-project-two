import { Component, ContentChild, ContentChildren, ElementRef, QueryList, ViewChild } from '@angular/core';
import { TesttaComponent } from '../testta/testta.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @ContentChild('para') param:ElementRef

  @ContentChild(TesttaComponent)testEl:TesttaComponent

  @ContentChildren('para') paramElement:QueryList<ElementRef>

  @ContentChildren(TesttaComponent) testElement:QueryList<TesttaComponent>

  
  StyleParagram(){
    // console.log(this.param.nativeElement)
    // console.log(this.testEl.name)

    this.paramElement.forEach((el)=>{
        console.log(el.nativeElement)
    })

    this.testElement.forEach((ele)=>{
      console.log(ele.name)
    })
  }
}

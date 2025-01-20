import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackGround]',
    standalone:true
})
export class SetBackGround implements OnInit{

    constructor(private element:ElementRef,private renderer:Renderer2){
       element.nativeElement.style.backgroundColor='#36454F';
       element.nativeElement.style.color='white'
      

    }
    ngOnInit(): void {
    //     this.element.nativeElement.style.backgroundColor='#36454F';
    //    this.element.nativeElement.style.color='white'
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#36454F');
    this.renderer.setStyle(this.element.nativeElement,'color','white');
    this.renderer.setAttribute(this.element.nativeElement,'title','This is example')
    }

   
}
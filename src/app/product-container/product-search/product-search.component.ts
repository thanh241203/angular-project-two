import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {
inputSearch='';

@Output()
inputSearchChanged:EventEmitter<string>=new EventEmitter<string>()
 

@ViewChild('inputSearch',{static:true})searchInPutElement:ElementRef

searchButton(){
this.inputSearch=this.searchInPutElement.nativeElement.value;
this.inputSearchChanged.emit(this.inputSearch)
}
}

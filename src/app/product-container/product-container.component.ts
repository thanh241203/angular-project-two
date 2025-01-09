import { Component } from '@angular/core';
import { ProductSearchComponent } from "./product-search/product-search.component";
import { ProductTableComponent } from "./product-table/product-table.component";
import { CommonModule } from '@angular/common';
import { FilterComponent } from "./filter/filter.component";
import { Product } from '../module/product';
@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [ProductSearchComponent, ProductTableComponent, CommonModule, FilterComponent],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent {
selectedProdcut:Product;
  products=[
  {
    id:1,
    name:'thanh',
    qualife:true
  },
  {
    id:2,
    name:'viet',
    qualife:false
  },
  ]
  getAllCount = this.products.length;
  getAllQualified=this.products.filter(n=>n.qualife==true).length;
  getAllNotQualified=this.products.filter(n=>n.qualife==false).length;

  selectedFilter='all';

  selectedFilterChangedContainer(event:string){
    this.selectedFilter=event
    console.log(this.selectedFilter)
  }

  inputSearch='';
  inputSearchChangedContainer(event:any){
  this.inputSearch=event;
  }
}

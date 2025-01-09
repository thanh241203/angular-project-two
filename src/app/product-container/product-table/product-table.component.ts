import { Component, Input } from '@angular/core';
import { Product } from '../../module/product';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {

  @Input()
  productTable!:Product

  @Input()
  searchResult=''
}

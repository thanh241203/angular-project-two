import { Component, Input, OnInit } from '@angular/core';
import { ProductContainerComponent } from '../product-container.component';
import { Product } from '../../module/product';
import { CommonModule } from '@angular/common';
import { SetBackGround } from '../../custome-directive/SetBackGround.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,SetBackGround],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  ngOnInit(): void {
    this.product = this.produdctListComp.selectedProdcut
  }
product:Product
@Input()
  produdctListComp:ProductContainerComponent
}

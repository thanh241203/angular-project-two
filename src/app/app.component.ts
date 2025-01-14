import { Component,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductContainerComponent } from "./product-container/product-container.component";
import { ProductDetailComponent } from "./product-container/product-detail/product-detail.component";
import { FooterComponent } from './product-container/footer/footer.component';
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductContainerComponent,
    ProductDetailComponent, CommonModule, FooterComponent, ChildComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
 


}

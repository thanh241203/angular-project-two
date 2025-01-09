import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
@Input()
all=0;

@Input()
notQualified=0;

@Input()
qualified=0;

selectedFilter:string='all'

@Output()
selectedFilterChanged:EventEmitter<string>=new EventEmitter<string>();

selectedFilterChangedButton(){
this.selectedFilterChanged.emit(this.selectedFilter)
}
}

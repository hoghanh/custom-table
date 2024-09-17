import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'custom-table';
  dummyData: Array<any> = new Array<any>();
  columns =[{
    header: 'Name',
    field: 'name',
  }, {
    header: 'StockCode',
    field: 'stockCode',
  },{
    header: 'UnitPrice',
    field: 'unitPrice',
  },{
    header: 'Quantity',
    field: 'quantity',
  }]


  constructor(private dataService: DataService) {
    this.dummyData = this.dataService.generateDummyData(100);
  }

}

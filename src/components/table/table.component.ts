import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columns: { header: string, field: string }[] = [];
  @Input() data: any[] = [];
  @Output() rowClick = new EventEmitter<any>();
  sortDirection: 'asc' | 'desc' | '' = '';
  sortColumn: string = '';


  onRowClick(row: any) {
    this.rowClick.emit(row);
  }

  onHeaderClick(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortData();
  }

  sortData() {
    this.data = this.data.sort((a, b) => {
      if (a[this.sortColumn] < b[this.sortColumn]) return this.sortDirection === 'asc' ? -1 : 1;
      if (a[this.sortColumn] > b[this.sortColumn]) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

}

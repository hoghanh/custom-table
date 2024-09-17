import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss',
})
export class CustomTableComponent {
  @Input() data: any[] = [];
  @Input() columns: { header: string; field: string }[] = [];
  @Input() pageSize: number = 10;

  totalPages: number = 1;
  dataPerPage: any[] = [];
  pageActive: number = 1;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.totalPages = this.data.length / this.pageSize;
      this.dataPerPage = this.data.slice(0, this.pageSize);
    }
  }

  handlePageChange(e: any) {
    const start = this.pageSize * (this.pageActive - 1);
    const end = start + this.pageSize;

    this.pageActive = e;
    this.dataPerPage = this.data.slice(start, end);
  }
}

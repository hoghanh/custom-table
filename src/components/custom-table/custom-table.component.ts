import {
  Component,
  Input,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CustomTableComponent {
  @Input() data: any[] = [];
  @Input() columns: { header: string; field: string }[] = [];
  @Input() pageSize: number = 10;

  totalPages: number = 1;
  dataPerPage: any[] = [];
  pageActive: number = 1;
  firstItem: number = 0;
  lastItem: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.totalPages = this.data.length / this.pageSize;
      this.handlePageChange(this.pageActive);
    }
  }

  handlePageChange(e: any) {
    this.pageActive = e;

    this.firstItem = this.pageSize * (this.pageActive - 1);
    this.lastItem = this.firstItem + this.pageSize;

    this.dataPerPage = this.data.slice(this.firstItem, this.lastItem);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() totalPages: number = 1;
  @Input() activePage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.activePage) {
      this.activePage = page;
      this.pageChange.emit(this.activePage);
    }
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  previousPage() {
    if (this.activePage > 1) {
      this.activePage--;
      this.pageChange.emit(this.activePage);
    }
  }

  nextPage() {
    if (this.activePage < this.totalPages) {
      this.activePage++;
      this.pageChange.emit(this.activePage);
    }
  }
}

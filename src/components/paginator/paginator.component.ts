import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginatorComponent {
  @Input() totalPages: number = 1;
  @Input() activePage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onPageChange(page: number) {
    this.activePage = page;
    this.pageChange.emit(this.activePage);
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

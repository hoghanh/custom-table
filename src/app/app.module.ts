import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { TableComponent } from '../components/table/table.component';
import { CustomTableComponent } from '../components/custom-table/custom-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    SearchBarComponent,
    TableComponent,
    CustomTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

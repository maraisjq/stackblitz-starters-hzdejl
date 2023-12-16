import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Configurable paginator
 */
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    MatTableModule,
  ],
})
export class OrdersComponent implements OnInit {
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  //pageEvent: PageEvent;

  ngOnInit() {

  }

 // handlePageEvent(e: PageEvent) {
 //   this.pageEvent = e;
 //   this.length = e.length;
 //   this.pageSize = e.pageSize;
 //   this.pageIndex = e.pageIndex;
 // }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}



//@Component({
 // selector: 'app-orders',
 // templateUrl: './orders.component.html',
 // styleUrls: ['./orders.component.css'],
 // standalone: true,
 // imports: [
    
 //   MatPaginatorModule
 // ]
//})
//export class OrdersComponent implements OnInit {

  //constructor() { }

  //ngOnInit() {
  //}

//}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '../common/grid.module';

import { ItemRoutingModule } from './item-routing.module';
import {ItemComponent } from './item.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewmodalComponent } from './viewmodal/viewmodal.component';


@NgModule({
  declarations: [ItemComponent, ViewmodalComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    GridModule,
    // MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  //   MatFormFieldModule,
  // MatTableModule,
  // MatPaginatorModule,
  // MatSortModule,


  ],
  exports: [ItemComponent,
    ViewmodalComponent],
})
export class ItemModule { }

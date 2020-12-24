import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [

    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      // MatDialogModule,
    ],
    exports: [
      FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      // MatDialogModule,
    ],
  })
  export class GridModule {}
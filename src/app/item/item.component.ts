import { Component, OnInit, ViewChild, InjectionToken } from '@angular/core';
import { ViewmodalComponent } from './viewmodal/viewmodal.component';
import { ItemService } from '../item.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './../services/data-service';
import { DataUtils } from './../utils/dataUtils';
import { OxbowConstants } from './../constants/oxbowConstants';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  constructor(private service: ItemService) {}
    //displayedColumns = ['shortDescription', 'longDescription1'];
  //ELEMENT_DATA: any;
  displayedColumns: string[] = ['sku', 'shortDescription', 'unitCost', 'unitVolume'];
  data: any;
  dataSource: MatTableDataSource<Element>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(ViewmodalComponent) viewmodal: ViewmodalComponent;

  ngOnInit() {

    this.loaditemData();
  }

  itemDetails(e: any) {
    // console.log('inside the row' + event);
    const item = Object.assign({}, e);
    console.log(e);
    // this.viewmodal.openItemDetails(e);

    // this.dialog.open(ViewmodalComponent, {
    //   data: {
    //     e,
    //   },
    // });
    // this.service.itemData(item);
  }

  loaditemData() {
    this.service.getItemService().subscribe((res) => {
      //res=this.data;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
      console.log(this.dataSource);
     });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface Element {
  sku: string;
  shortDescription: string;
   unitCost: number;
  unitVolume: string;
}

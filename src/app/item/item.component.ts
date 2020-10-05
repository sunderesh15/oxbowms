import { Component, OnInit, ViewChild, InjectionToken } from '@angular/core';
import { ViewmodalComponent } from './viewmodal/viewmodal.component';
import { ItemService } from '../item.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  constructor(private service: ItemService) {}
  displayedColumns = ['shortDescription', 'longDescription1'];
  //ELEMENT_DATA: any;
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  res: Element[];
  dataSource = new MatTableDataSource<Element>(this.res);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(ViewmodalComponent) viewmodal: ViewmodalComponent;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loaditemData();
  }

  itemDetails(e: any) {
    //console.log('inside the row' + event);
    const item = Object.assign({}, e);
    console.log(e);
    // this.viewmodal.openItemDetails(e);

    // this.dialog.open(ViewmodalComponent, {
    //   data: {
    //     e,
    //   },
    // });
    //this.service.itemData(item);
  }

  loaditemData() {
    this.service.getItems().subscribe((res) => {
      console.log(res);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface Element {
  nshortDescriptioname: string;
  longDescription1: string;
  // weight: number;
  // symbol: string;
}

//const ELEMENT_DATA: Element[] = this.ELEMENT_DATA;

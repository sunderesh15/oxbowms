import { Component, OnInit, Inject, InjectionToken } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-viewmodal',
  templateUrl: './viewmodal.component.html',
  styleUrls: ['./viewmodal.component.css'],
})
export class ViewmodalComponent implements OnInit {
  //constructor(private service: ItemService) {}
  //MAT_DIALOG_DATA: InjectionToken<any>;
  constructor() // @Inject(MAT_DIALOG_DATA) public data: any // public dialogRef: MatDialogRef<ViewmodalComponent>,
  {}

  onNoClick(): void {
    // this.dialogRef.close();
  }
  item: any;
  //e: any;
  ngOnInit(): void {
    //this.openItemDetails(e);
  }
}

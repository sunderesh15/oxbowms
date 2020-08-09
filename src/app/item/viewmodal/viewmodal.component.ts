import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmodal',
  templateUrl: './viewmodal.component.html',
  styleUrls: ['./viewmodal.component.css'],
})
export class ViewmodalComponent implements OnInit {
  constructor() {}
  item: any;
  ngOnInit(): void {}

  public openItemDetails(item: any) {
    console.log('inside the item details');
    this.item = item;
    console.log('item details ', this.item);
  }
}

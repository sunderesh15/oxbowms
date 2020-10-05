import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isExpanded = false;
  opened=true;
  mode:any='side';
 
  constructor(private elem:ElementRef) {
  }
   ngOnInit(): void {
  }
  isOpen(){
    this.isExpanded=! this.isExpanded;
    if(!this.isExpanded){
   (<HTMLElement>this.elem.nativeElement.querySelector('.mat-drawer-backdrop')).classList.remove('custom-backdrop');
    }
    else{
     (<HTMLElement>this.elem.nativeElement.querySelector('.mat-drawer-backdrop')).classList.add('custom-backdrop');
    }
  }
  close(){
    (<HTMLElement>this.elem.nativeElement.querySelector('.mat-drawer-backdrop')).classList.remove('custom-backdrop');
    this.isExpanded=false;
  }

    
}

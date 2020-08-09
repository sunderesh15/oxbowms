import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

  

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    }
  ];

@NgModule({
  declarations: [LoginComponent],
  imports: [
  CommonModule,
    //MatFormFieldModule,
    //MatInputModule,
    //  ReactiveFormsModule,   FormsModule, MatFormFieldModule,
     
    RouterModule.forChild(routes)
  ]
})
export class LoginModule {
  constructor() {
    console.log('Lazily Loaded : Login Module');
  }

 
}



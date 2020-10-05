import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';


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
    RouterModule.forChild(routes),
    ReactiveFormsModule, 
     FormsModule
      ]
})
export class LoginModule {
  constructor() {
    console.log('Lazily Loaded : Login Module');
  }

 
}



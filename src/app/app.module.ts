import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FotterComponent } from './common/fotter/fotter.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
import { ItemComponent } from './item/item.component';
import { ViewmodalComponent } from './item/viewmodal/viewmodal.component';
import { ItemService } from './item.service';
import {MaterialModule} from './material/material.module';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './services/data-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FotterComponent,
    SidebarComponent,
    ItemComponent,
    ViewmodalComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [CommonService, ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}

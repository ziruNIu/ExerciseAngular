import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { DetailComponent } from './detail/detail.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    CheckboxComponent,
    DetailComponent,
    HeaderComponent,
    Component,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [
    // OuvragesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

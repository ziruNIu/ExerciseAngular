import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { AfterLogInComponent } from './after-log-in/after-log-in.component';
@NgModule({
  declarations: [
    CheckboxComponent,
    AppComponent,
    ConnectionComponent,
    DetailComponent,
    HeaderComponent,
    DetailComponent,
    ProductsComponent,
    ProductComponent,
    AfterLogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,

  ],
  providers: [
    // OuvragesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

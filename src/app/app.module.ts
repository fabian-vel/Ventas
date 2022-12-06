import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewComponent } from './component/view/view.component';
import { ProductComponent } from './component/product/product.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MaterialModule } from './angular-material/material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { SalesComponent } from './component/sales/sales.component';
import {MatButtonModule} from '@angular/material/button';
import { AProductComponent } from './component/a-product/a-product.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ProductComponent,
    ToolbarComponent,
    SalesComponent,
    AProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

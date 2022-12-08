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
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SalesListComponent } from './component/sales-list/sales-list.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ProductComponent,
    ToolbarComponent,
    SalesComponent,
    AProductComponent,
    SalesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ScrollingModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

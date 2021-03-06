import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PriceDiscountPipe } from './pipes/price-discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PriceDiscountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

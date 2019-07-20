import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ListProductsComponent, ProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListProductsComponent
  ]
})
export class CartModule { }

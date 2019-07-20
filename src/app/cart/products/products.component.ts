import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() product: any = {};
  @Output() getToCart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buyProduct() {
    let productBuying = {};
    productBuying = {
      ID: this.product.ID,
      name: this.product.Name,
      image: this.product.Image,
      price: this.product.Price,
      number: this.product.Count + 1
    };

    this.getToCart.emit(productBuying);
  }
}

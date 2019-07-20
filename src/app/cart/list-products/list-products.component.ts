import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  listProducts: Array<{ ID: number, Name: string, Image: string, Price: number, Count: number }> = [
    { ID: 1, Name: 'Iphone', Image: '../../../assets/image/iphone.png', Price: 800, Count: 0 },
    { ID: 2, Name: 'Samsung', Image: '../../../assets/image/samsung.png', Price: 700, Count: 0 },
    { ID: 3, Name: 'Huawei', Image: '../../../assets/image/huawei.png', Price: 600, Count: 0 },
  ];
  listProductsPurchased: any[] = [];
  toTal: any;
  isStatus: boolean;
  constructor() { }

  ngOnInit() {
    this.isStatus = false;
  }

  getProductPurchased(productBuying: any) {
    const checkExits = this.checkExits(productBuying, this.listProductsPurchased);
    this.isStatus = true;
    if (checkExits === true) {
      this.listProductsPurchased.map(x => x.ID).map(ID => {
        for (let i = 0; i < this.listProductsPurchased.length; i++) {
          if (this.listProductsPurchased[i].ID === ID && productBuying.ID === ID) {
            let number = 0;
            number = this.listProductsPurchased[i].number;
            console.log(this.listProductsPurchased[i].number);
            return this.listProductsPurchased[i].number = number + 1;
          }
        }
      });
    } else {
      this.listProductsPurchased.push(productBuying);
    }
  }

  checkExits(obj, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].ID === obj.ID) {
        return true;
      }
    }
    return false;
  }

  delete() {
    const i = this.listProductsPurchased.indexOf(x => x.ID);
    this.listProductsPurchased.splice(i, 1);
    if (this.listProductsPurchased.length === 0) {
      this.isStatus = false;
    }
  }

  plusProduct(sp) {
    sp.number++;
  }

  subProduct(sp) {
    if (sp.number > 1) {
      sp.number--;
    }
  }

  getTotal(product): number {
    this.toTal = product.price;
    return this.toTal = (product.price * product.number);
  }

  getSumToTal(): number {
    let sumTotal = this.listProductsPurchased.reduce((sumTotal, productBuying, index) => {
      return sumTotal += productBuying.price * productBuying.number;
    }, 0);
    return sumTotal;
  }

  pay() {
    this.listProductsPurchased = [];
    this.isStatus = false;
  }
}

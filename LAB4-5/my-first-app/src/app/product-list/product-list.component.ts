import { Component } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  products = products;

  declare product: Product;

  @Input() cntlikes = 0;
  // @ts-ignore
  @Input() categoryId: number;
  @Output() remove = new EventEmitter()

  share() {
    window.alert(`You will be redirected to Telegram`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  productremove(product: any){
    const removeid: number = this.products.indexOf(product);
    if (removeid != -1)
      this.products.splice(removeid, 1);
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

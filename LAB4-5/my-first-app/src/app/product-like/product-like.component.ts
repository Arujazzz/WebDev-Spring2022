import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { products, Product } from '../products';
@Component({
  selector: 'app-product-like',
  templateUrl: './product-like.component.html',
  styleUrls: ['./product-like.component.css']
})
export class ProductLikeComponent implements OnInit {

  products = products;
  product: Product | undefined;
  @Input() cntlikes = 0;

  constructor() { }

  ngOnInit(): void {
  }

  like(product: any){
    this.cntlikes++;
    product.check = true;
  }

}

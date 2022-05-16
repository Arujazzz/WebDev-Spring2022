import {Component, OnInit} from '@angular/core';
import {Product, products} from '../shared/models/products';
import {Router} from "@angular/router";
import { ProductService } from '../shared/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  searchText: string;


  constructor(
    private productService: ProductService,
    ) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe((data) => {
      //console.log(data)
      this.products = data
    })
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }


  asc(){
    this.products.sort((a, b) => (a.rating < b.rating ? -1 : 1))
  }

  des(){
    this.products.sort((a, b) => (a.rating > b.rating ? -1 : 1))
  }

  share() {
    window.alert(`You will be redirected to Telegram`);
  }

}

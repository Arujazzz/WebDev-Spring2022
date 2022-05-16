import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product, products } from '../shared/models/products';
import { CartService } from '../shared/services/cart.service';
import { ProductService } from '../shared/services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private location: Location,
    private productService: ProductService,
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  goBack(){
    this.location.back();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(id: number){
    this.productService.getProduct(id).subscribe((product) => this.product = product)
  }

}

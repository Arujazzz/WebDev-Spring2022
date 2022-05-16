import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../shared/models/products';
import { Category } from '../shared/models/categories';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  products: Product[] = [];

  @Input() category: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.productService.getProductsByCategory(id).subscribe((products) => {
        this.products = products;
      })
    })
  }


  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  share() {
    window.alert(`You will be redirected to Telegram`);
  }

  goBack() {
    this.location.back();
  }

}

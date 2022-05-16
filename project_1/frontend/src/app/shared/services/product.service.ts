import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getProduct(product_id: number): Observable<Product>{
    return this.http.get<Product>( `${this.BASE_URL}/api/products/${product_id}`)
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products`)
  }

  getProductsByCategory(category_id: number): Observable<Product[]>{
    //console.log(this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${product_id}/products`))
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${category_id}/products`)
  }
}

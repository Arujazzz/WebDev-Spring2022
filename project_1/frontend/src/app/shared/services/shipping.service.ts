import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Shipping } from '../models/shipping';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  BASE_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  getShippings(): Observable<Shipping[]>{
    return this.http.get<Shipping[]>(`${this.BASE_URL}/api/shippings`)
  }
}

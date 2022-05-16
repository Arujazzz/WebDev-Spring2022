import { Component, OnInit } from '@angular/core';
import { Shipping } from '../shared/models/shipping';
import { ShippingService } from '../shared/services/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippings: Shipping[] = [];

  constructor(private shippingService: ShippingService) { }

  ngOnInit(): void {
    this.getShipping()
  }

  getShipping(){
    this.shippingService.getShippings().subscribe((data) => {
      console.log(data);
      this.shippings = data;
    })

  }
}

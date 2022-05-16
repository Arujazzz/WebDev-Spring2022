import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

  items = this.cartService.getItems();
  totalPrice = this.cartService.totalPrice();


  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  ngOnInit(): void {
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  clear(){
    this.items = this.cartService.clearCart();
  }


}

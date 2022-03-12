import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html'
})
export class ShippingComponent implements OnInit {

  shippingCosts = this.cartService.getShippingPrices();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}

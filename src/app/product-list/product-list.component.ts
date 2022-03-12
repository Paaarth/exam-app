import { Component, OnInit } from '@angular/core';
import { products } from '../list/products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
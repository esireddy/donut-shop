import { Component, OnInit } from '@angular/core';
import { DonutCartItem, DonutDetails } from 'src/app/donut';
import { DonutcartService } from 'src/app/services/donutcart.service';

@Component({
  selector: 'app-donut-cart',
  templateUrl: './donut-cart.component.html',
  styleUrls: ['./donut-cart.component.css']
})
export class DonutCartComponent implements OnInit {

  constructor(private cartService: DonutcartService) { 
  }

  ngOnInit(): void {
  }

  onRemoveItemFromCart(item : DonutCartItem) : void {
    this.cartService.removeDonutFromCart(item.id);
  }

  getCartItems(): DonutCartItem[] {
    return this.cartService.getCartItems();
  }

  getTotalPriceOfCart(): number {
    return this.cartService.getTotalPriceOfItemsInCart();
  }

  getTotalCaloriesOfCart(): number {
    return this.cartService.getTotalCaloriesOfItemsInCart();
  }
}

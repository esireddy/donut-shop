import { Injectable } from '@angular/core';
import { DonutCartItem, DonutDetails } from '../donut';

@Injectable({
  providedIn: 'root'
})
export class DonutcartService {

  donutCartItems: DonutCartItem[];

  constructor() {
    this.donutCartItems = [];    
   }

   getCartItems() : DonutCartItem[] {
     return this.donutCartItems;
   }

   addDonutToCart(donut: DonutDetails) : void {
    console.log(`processing addDonutToCart...${donut.id}`);
     let currentItemIndex = this.getItexIndexIfExists(donut.id);
     console.log(`currentItemIndex...${currentItemIndex}`);
     currentItemIndex !== -1 ?  this.donutCartItems[currentItemIndex].quantity++ : this.donutCartItems.push({id: donut.id, name: donut.name, calories: donut.calories, price: 1, quantity : 1});
     console.log(`After adding item to cart...${this.donutCartItems[0].id} and ${this.donutCartItems[0].quantity}`);

   }

   removeDonutFromCart(donutId: number) : void {
    let currentItemIndex = this.getItexIndexIfExists(donutId);

    if(currentItemIndex >= 0) {
      this.donutCartItems[currentItemIndex].quantity > 1 ? this.donutCartItems[currentItemIndex].quantity-- : this.donutCartItems.splice(currentItemIndex, 1);
    }
  }

  getTotalPriceOfItemsInCart(): number {

    let totalPrice: number = 0;
    let totalQuantity: number = 0;

    this.donutCartItems.map(x => { totalQuantity += x.quantity; });
    totalPrice = totalQuantity * 1;

    return totalPrice;
  }

  getTotalCaloriesOfItemsInCart(): number {

    let totalCalories: number = 0;

    this.donutCartItems.map(x => { totalCalories += (x.quantity * x.calories); });
    
    return totalCalories;
  }

  getItexIndexIfExists(donutId: number) : number {
    return this.donutCartItems.findIndex(x => x.id === donutId);
  }
}

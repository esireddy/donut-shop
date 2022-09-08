import { Component, OnInit } from '@angular/core';
import { DonutDetails } from 'src/app/donut';

@Component({
  selector: 'app-donut-cart',
  templateUrl: './donut-cart.component.html',
  styleUrls: ['./donut-cart.component.css']
})
export class DonutCartComponent implements OnInit {

  donutsInCart: DonutDetails[];

  constructor() { 
    this.donutsInCart = [];
  }

  ngOnInit(): void {
  }

}

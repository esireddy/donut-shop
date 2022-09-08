import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Donut, DonutDetails } from 'src/app/donut';
import { DonutService } from 'src/app/services/donut.service';
import { DonutcartService } from 'src/app/services/donutcart.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {

  donutId: number;
  details: DonutDetails;
  
  constructor(private donutService : DonutService, private donutCartService: DonutcartService, private route: ActivatedRoute) {
    this.donutId = 999;
    this.details = <DonutDetails> {};
   }

  ngOnInit(): void {
    this.donutId = Number(this.route.snapshot.paramMap.get('id'));
    this.donutService.getDonutById(this.donutId).subscribe(x => this.details = x);
  }

  onAddToCart(): void {
    this.donutCartService.addDonutToCart(this.details);
  }
}

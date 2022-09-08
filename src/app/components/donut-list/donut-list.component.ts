import { Component, OnInit } from '@angular/core';
import { Donut } from 'src/app/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {
  title = 'donut-shop';
  donuts: Donut[];

  constructor(private donutService : DonutService) {
    this.donuts = [];
  }

  ngOnInit() {
    this.donutService.getDonuts().subscribe(donutInfo => this.donuts = donutInfo.results);
  }

}

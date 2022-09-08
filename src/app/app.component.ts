import { Component, OnInit } from '@angular/core';
import { Donut, DonutsInfo } from './donut';
import { DonutService } from './services/donut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  
  constructor(private donutService : DonutService) {
  }

  ngOnInit() {
  }

}

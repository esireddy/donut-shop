import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donut, DonutsInfo, DonutDetails } from '../donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http: HttpClient) { }

  getDonuts(): Observable<DonutsInfo>
  {
    return this.http.get<DonutsInfo>(environment.donutsurl);
  }

  getDonutById(id: number): Observable<DonutDetails>
  {
    return this.http.get<DonutDetails>(environment.donutDetailsUrl + id + ".json");
  }
}

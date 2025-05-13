import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineserviceService {
  lineChart() {
    throw new Error('Method not implemented.');
  }
  
  constructor(private _httpClient:HttpClient) { }
  
  LineChart():Observable<any>{
    return this._httpClient.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
  }
}

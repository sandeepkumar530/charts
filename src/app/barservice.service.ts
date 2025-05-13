import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarserviceService {
  
  constructor(private _httpClient:HttpClient) { }
  
  BarChart():Observable<any>{
    return this._httpClient.get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data1.json");
  }
  PieChart():Observable<any>{
    return this._httpClient.get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/218423/data1.json");
  }
}

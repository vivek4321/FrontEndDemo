import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DetailsService {

  BaseURL:String = 'http://localhost:3000/api';

  constructor(private http: Http) { 
  }

  public getMockData(): Observable<any> {
    return this.http.get("http://localhost:4200/assets/data/mockData.json")
                    .map((res:any) => res.json());
  }
  
  public postInstrumentDetails(value:any): Observable<any> {
    return this.http.post(this.BaseURL+"/instrumentDetails",value)
    .map((res:any) => res.json());
  }

  public postRiskDetails(value:any): Observable<any> {
    return this.http.post(this.BaseURL+"/riskDetails",value)
    .map((res:any) => res.json());
  }
    
}


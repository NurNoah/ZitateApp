import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private _http: HttpClient) { }
  apiUrl = 'apiurl';

  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  createNewZitat(data:any):Observable<any>{
    return this._http.post(`${this.apiUrl}`,data)
  }
}

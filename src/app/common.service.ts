import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  constructor(private _http:HttpClient) { }
  
  
  login(user: any):Observable<any>{
   
    let url ="test";
   // return this._http.post<(url,user);
    return null;
  }

  

}

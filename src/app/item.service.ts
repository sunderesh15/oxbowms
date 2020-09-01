import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from './../environments/environment';
import { dataURL } from './common/dataURL';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private _http: HttpClient) {}

  private itemBehaviourSub = new BehaviorSubject<string>('0');
  itemDetails$ = this.itemBehaviourSub.asObservable();

  itemData(item: any) {
    this.itemBehaviourSub.next(item);
  }

  getItems(): Observable<any> {
    const URL = environment.apiBaseURL + '/item/12';
    return this._http.get<any>(URL).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}

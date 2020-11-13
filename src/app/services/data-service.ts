import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export class DataService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getService(url: string): Observable<any> {
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any[]>('data', []))
      );
  }

  



  //////// Save methods //////////

  /** POST: add a new hero to the server */
  postService(url: string , request: any): Observable<any> {
    return this.http.post<any>(url, request, this.httpOptions).pipe(
      catchError(this.handleError<any>('post service error'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteService(url: string , request: any): Observable<any> {


    return this.http.delete<any>(url, this.httpOptions).pipe(
      catchError(this.handleError<any>('delete service error'))
    );
  }

  /** PUT: update service on the server */
  updateService(url: string , request: any): Observable<any> {
    return this.http.put(url, request, this.httpOptions).pipe(
      catchError(this.handleError<any>('put service'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}

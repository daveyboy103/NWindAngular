import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ICustomer} from "./models/customer";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://localhost:44354/api/Customers';
  constructor(private http: HttpClient) { }

  getCustomers() : Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.url).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(DataService.handleError));
  }

  private static handleError(err: HttpErrorResponse) : Observable<never>{
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

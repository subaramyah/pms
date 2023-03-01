import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    'content-type': 'application/json',
    'username': 'user',
    'password': 'pass',

  })
  // observe: 'response' as 'response'
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentFormService {

  constructor(private http: HttpClient) {

  }

  getSenderDetails(): Observable<any> {
    var details: Observable<any> = this.http.get<any>('http://localhost:9900/api/details/all_physician', httpOptions);
    //console.log(details.dropdownData);
    return details;
  }
}

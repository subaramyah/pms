import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class  AppointmentFormService{

    constructor(private http: HttpClient) { }
    public appointmentBooking(data: any): Observable<any>
    {
      console.warn("Appointment service",data);
     return this.http.post<any>("", data);
    }
}
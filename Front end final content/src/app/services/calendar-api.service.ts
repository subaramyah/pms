import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {

  constructor(private http: HttpClient) { }
  public fetchAppointments(physicianId: number): Observable<any> 
  {
    return this.http.get<any>('http://localhost:5001/scheduling-ms/scheduling/physician/fetch-two-months-upcoming-appointmnets-for-physician/' + physicianId);
  }

}
}
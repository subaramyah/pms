import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { APPOINTMENTS_URL, APPOINTMENTID, APPROVED_APPOINTMENT, DECLINEAPPOINTMENTID, INBOX_MESSAGE_URL, INBOX_SEND_MESSAGE_URL, INBOX_REPLY_MESSAGE_URL, SENDER_DETAIL_URL, CANCEL_MESSAGE_URL } from './../config/URL.config';

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
export class InboxServiceService {
  email: any;

  constructor(private http: HttpClient) {

  }

  
    

  getAppointments(): Observable<any> {​​​​​​
  this.email = sessionStorage.getItem('loggedInEmail');
  return this.http.get<any>('http://localhost:9900/api/appointment/patients_appointment/'+this.email, httpOptions);
    }​​​​​​
  
  

  getApprovedAppointments(): Observable<any> {
    // sessionStorage.setItem("userid",'1' )
    //  var x = sessionStorage.getItem("userId");
    var x = 1
    return this.http.get<any>(APPROVED_APPOINTMENT + x, httpOptions);
  }

  public getMessages(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9900/api/inbox/getMessages");
}

  approveAppointmentRow(id: number) {
    return this.http.put(APPOINTMENTID + id, id).subscribe(data => {
    });
  }
  
  declineAppointmentRow(id: number) {
    return this.http.put(DECLINEAPPOINTMENTID + id, id).subscribe(data => {
    });

  }

  sendMessage(body : any): Observable<any>{
    return this.http.post<any>('http://localhost:9900/api/inbox/sendMessage', body)
  }

  replyMessage(body : any): Observable<any>{
    return this.http.post<any>(INBOX_REPLY_MESSAGE_URL, body)
  }

  getSenderDetails(): Observable<any> {
    var details: Observable<any> = this.http.get<any>('http://localhost:9900/api/details/all_physician', httpOptions);
    //console.log(details.dropdownData);
    return details;
  }

  cancelMessage(messageId:number){
    return this.http.put(CANCEL_MESSAGE_URL+messageId, httpOptions).subscribe(data => {
    });
  }

  log() {
    console.log();
  }
}

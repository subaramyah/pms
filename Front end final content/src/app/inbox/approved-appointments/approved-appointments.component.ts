import { Component, OnInit } from '@angular/core';
import { InboxServiceService } from '../inbox-service.service';
// import { Sort } from '@angular/material/sort';
// import { AfterViewInit, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-approved-appointments',
  templateUrl: './approved-appointments.component.html',
  styleUrls: ['./approved-appointments.component.css']
})
export class ApprovedAppointmentsComponent implements OnInit {
  displayedColumns: string[] = ['appointmentId', 'patientName', 'subject', 'appointmentDate'];
  //  approvedAppointmentData: Array<any> = [];
  approvedAppointmentData: any = {};
  currentDate = new Date();

  constructor(private inboxService: InboxServiceService) {
    console.log(this.currentDate)
  }

  // sortData(sort: Sort) {
  //   const data = this.approvedAppointmentData.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.approvedAppointmentData = data;
  //     return;
  //   }

  // }
  // @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    this.inboxService.getApprovedAppointments().subscribe(data =>
      this.approvedAppointmentData = data
    );
  }


}

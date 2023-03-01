import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


// import { Sort } from '@angular/material/sort';
// import { AfterViewInit, ViewChild } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
import { InboxServiceService } from '../inbox-service.service';



// export interface PeriodicElement {
//   patientId : number;
//   patientName: string;
//   subject: string;
//   appointmentTitle: string;
// }

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

export class AppointmentsComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['appointmentId', 'patientName', 'subject', 'appointmentDate', 'action'];
  title = 'appointmentDetailsData';
  appointmentData: any = {};
  appointmentID: any;

  dataSource1 = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
  }

  constructor(private inboxService: InboxServiceService, private _router: Router) {

  }

  // sortData(sort: Sort) {
  //   const data = this.appointmentData.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.appointmentData = data;
  //     return;
  //   }

  // }
  // @ViewChild(MatSort) sort: MatSort;



  ngOnInit(): void {
    this.inboxService.getAppointments().subscribe(data =>
      this.dataSource1.data = data
    );  
  }

  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);

    });
  }

  decline(appointmentId: any) {
    this.appointmentID = appointmentId
    this.inboxService.declineAppointmentRow(this.appointmentID);
    this.reloadCurrentRoute();

  }
  approve(appointmentId: any) {
    this.appointmentID = appointmentId;
    //console.log(this.appointmentID)
    var data = this.inboxService.approveAppointmentRow(this.appointmentID);
    this.reloadCurrentRoute();

    // this.appointmentData = this.appointmentData.filter(i => i !== appointmentId);
  }
}

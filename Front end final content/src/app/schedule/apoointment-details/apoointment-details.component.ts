import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';
import {AfterViewInit, ViewChild} from '@angular/core';
import { merge, of } from 'rxjs';
import { catchError, startWith, switchMap } from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { GenerateTableObjService } from 'src/app/services/generate-table-obj.service';
import { ApoointmentDetailFormService } from './apoointment-details.service';
import {MatTableDataSource} from '@angular/material/table';
// import { APPOINTMENT_DETAILS_URL } from '../../../config/URL.config';



export interface MessageElement {
  id: number;
  email:string;
  appointmentTitle: string;
  appointmentTime:any;
}

@Component({
  selector: 'app-apoointment-details',
  templateUrl: './apoointment-details.component.html',
  styleUrls: ['./apoointment-details.component.css']
})

export class ApoointmentDetailsComponent implements OnInit,AfterViewInit  {
  isLoadingResults = true;
  paginatedObj: any = {};
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['patientId', 'patientName', 'appointmentTitle', 'doctorName','appointmentTime'];
  title="appointmentDetailsData";
  appointmentData:any = {};

  constructor( private appointmentDetailsService: GenerateTableObjService,private apoointmentDetailFormService:ApoointmentDetailFormService){}
  ngOnInit(): void {
    this.apoointmentDetailFormService.getAppointments().subscribe((data) =>{
      this.dataSource.data = data
      console.log("HIIIIIIIIIIII"+data);
    });
  }
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  
   ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  
  }
}

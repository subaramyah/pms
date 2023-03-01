import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { VisitFormService } from './visit-form.service';

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrls: ['./visit-form.component.css']
})


export class VisitFormComponent implements OnInit,AfterViewInit{


//this.selection = new SelectionModel<MyDataType>(allowMultiSelect, initialSelection);

  displayedColumns: string[] = ['Diagnosis ID', 'Diagnosis Description','Action'];
  displayedColumnsMedication: string[] = ['Medication ID', 'Medication Description','Action'];
  displayedColumnsProcedure: string[] = ['Procedure ID', 'Procedure Description','Action'];
  dataSource = new MatTableDataSource();
  dataSourceMedication = new MatTableDataSource();
  err: any;
  result:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection:any;
  //diagnosis: any[] = [];
  checkbox:any;

  public diagnosisData: Array<any> = [];
 
  //initialSelection: any;

  //DiagnosisElement:any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceMedication.paginator = this.paginator;
  }
 
  constructor(private fb: FormBuilder,private http: HttpClient,private visitService:VisitFormService ) {
    //this.diagnosis = [];
  const initialSelection: any[]=[];
  const allowMultiSelect = true;
  this.selection = new SelectionModel(allowMultiSelect,initialSelection);
  
  }
  multistep = new FormGroup({
    vitalSigns : new FormGroup({
      email : new FormControl(''),
      height : new FormControl(''),
      weight : new FormControl(''),
      bloodPressure : new FormControl(''),
      bodyTemp : new FormControl(''),
      respiratinRate : new FormControl('')
     }),
     diagnosis: new FormGroup({
      diagnosisDescription : new FormControl(''),
      diagnosisText : new FormControl('')
     }),
     medication : new FormGroup({
      drugName : new FormControl(''),
      medicationText : new FormControl('')
     }),
     procedure : new FormGroup({
      ProcedureType : new FormControl(''),
      procedureText : new FormControl('')
     })
  })

  firstFormGroup:FormGroup = this.fb.group({

    // firstCtrl: ['', Validators.required]

  });
  secondFormGroup:FormGroup = this.fb.group({
    
  });
  thirdFormGroup:FormGroup = this.fb.group({
    
  });
  fourthFormGroup:FormGroup = this.fb.group({

  });
  
  ngOnInit():void {

    // for diagnosis
     this.visitService.getDiagnosis().subscribe((data) =>
     this.dataSource.data=data);

    //for medication
    this.visitService.getMedication().subscribe((data)=>
    this.dataSourceMedication.data=data);

    //for procedure
    // this.visitService.getProcedure().subscribe((data)=>
    // this.dataSource.data=data);
    
  }

  doPatientVisit(data:any){
    console.log(data);
      return this.http.put("http://localhost:9900/api/visit/patientVisit",data,{responseType: 'text' as 'json'}).subscribe((result)=>{
      console.log("Result",result);
      this.err='';
      this.result = result;
   },(err)=>{
     console.log(err);
     err='';
     err= 'Patient Not Registered Successfully!';
     this.err = err;
     console.log(err);
  }) 
}

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {

  // this.checkbox=false;
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected == numRows;
}

yourfunc(row:any) {
     
  console.log(row);    
  
}



/** Selects all rows if they are not all selected; otherwise clear selection. */
 masterToggle() {
   this.isAllSelected() ?
       this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
export interface DiagnosisElement {
  diagnosisDescription: any;
  diagnosisText: string;
}

export interface MedicationElement {
  drugName: any;
  medicationText: string;
}


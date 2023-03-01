import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { VisitFormService } from '../visit-form/visit-form.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css']
})
export class VitalSignsComponent implements OnInit {
  vitalForm: any;
  @ViewChild(FormGroupDirective) formDirective: any;


  submitForm(): void {
    this.visitformSvc.saveVitalFrom(this.vitalForm.value).subscribe((result) => { 
      console.warn(result); 
    });
    
      if((this.vitalForm.valid)){
        this.formDirective.resetForm(); 
        this.openSnackBar()
      }
  }
    
  
  openSnackBar() {
    this._snackBar.open('Vital Sign Submitted Successfully!!', 'End', {
      duration: 600,
    
    });
  }

  constructor(private formBuilder: FormBuilder,private visitformSvc: VisitFormService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.vitalForm = this.formBuilder.group({
      height: [''],
      weight: ['',],
      bloodPressure: [''],
      bodyTemp: [''],
      respiratinRate: [''],
      email: ['']

      

    });

  }

}

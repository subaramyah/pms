import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forgotPassword } from './forgotPassword';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,

  ) {}

  ngOnInit() {}

  forgotPasswordForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]
    ],
  });

  forgotPasswordSend(){
    let fp:forgotPassword = new forgotPassword(); 
    Object.assign(fp, this.forgotPasswordForm.value);
    return this.http.post("http://localhost:9900/api/mail/sendEmail",fp).subscribe( data => {

    if (data != null) {
        alert('Email is sent to reset the password.');
        this.router.navigateByUrl('/home');
      }
    },
    error => {
      console.log(error);
    }
  );

  }
  get email() {
    return this.forgotPasswordForm.get('email');
  }

  
}



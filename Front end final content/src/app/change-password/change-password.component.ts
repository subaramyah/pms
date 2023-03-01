import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './change-password-validator';
import { changePassword } from './changePassword';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
 // role: any;
  email: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,

  ) {}

  ngOnInit(): void {
    
  }

  changePasswordForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmNewpassword:['', Validators.required]
  },{
      validator: MustMatch('newPassword', 'confirmNewpassword')
  }
  );

  changePasswordSend(){
    let cp:changePassword = new changePassword(); 
    Object.assign(cp, this.changePasswordForm.value);
    this.email = sessionStorage.getItem('loggedInEmail');
    return this.http.post("http://localhost:9900/api/mail/changePassword/"+this.email,cp).subscribe( result => {
    if (result != null) {
        alert('Password changed successfully');
        this.router.navigateByUrl('/home');


      }
    },
    error => {
      console.log(error);
    }
  );

  }
  get password() {
    return this.changePasswordForm.get('password');
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }
  get confirmNewpassword() {
    return this.changePasswordForm.get('confirmNewpassword');
  }

   

 
}

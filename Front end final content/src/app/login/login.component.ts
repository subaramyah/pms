import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';
import { LOGIN_URL } from '../config/URL.config';
import { SnackbarAlertService } from '../services/snackbar-alert.service';
import { isThisHour } from 'date-fns';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:any;
  password:any;
  errorMessage = "Invalid Credentials";
  successMessage:any;
  invalidLogin = false;
  loginSuccess = false;
  hide: boolean=true;
  loginDetails: any;
  dummyLoginVar:any
 
  constructor(private router:Router,
    private tokenStorage: TokenStorageService, 
    //  private alert: SnackbarAlertService,
    private http: HttpClient,
    private fb: FormBuilder,
    private authService: AuthService) {}
 
  ngOnInit(){}
 
  loginForm:FormGroup = this.fb.group({
  email :['',[Validators.required,Validators.email]],
  password :['',[Validators.required,Validators.minLength(6)]],
  isEmployee :['']
  })
  
  doLogin(data:any){
    console.log(data);
    return this.http.post(LOGIN_URL,data,
    { 
      responseType: 'text' as 'json'}).subscribe(
      (data) => {
        console.log(data)
        this.dummyLoginVar = data;
        this.loginDetails = JSON.parse(this.dummyLoginVar);
        this.tokenStorage.saveToken(this.loginDetails.token);
        this.tokenStorage.saveUser(this.loginDetails);
         console.log("@@@@"+this.loginDetails.role);
  
         sessionStorage.setItem("loggedInRole", this.loginDetails.role);
         sessionStorage.setItem("loggedInEmail", this.loginDetails.email);
 
          if(this.loginDetails.role=='ROLE_NURSE' || this.loginDetails.role == 'ROLE_PHYSICIAN'){
            this.router.navigate(['/core/inbox/sharedinbox']);
          } else if (this.loginDetails.role== 'ROLE_ADMIN'){
            this.router.navigate(['/core/inbox/sharedinbox']);
            //this.router.navigate(['/core/admin/hospitalUserList']);
          } else if (this.loginDetails.role == 'ROLE_PATIENT'){
            // this.router.navigate(['/core/visit/appointment_form']);
            this.router.navigate(['/core']);
          } else {
            //this.alert.openSnackBar('Something went Wrong', '', 3000);
          }
          
        },
        err => {
          //this.alert.openSnackBar(err.error.message, '', 3000);
          console.log(err);
        }
      );
  }
 
  checkUser(e: any) {
    if (e.checked)
      this.loginForm.value.isEmployee = true;
    else
    this.loginForm.value.isEmployee = false;
  }
  
}
import { Component, OnInit } from '@angular/core';
import { NAV_ITEMS_LIST } from 'src/app/config/nav-items-list-config';
import { TokenStorageService } from 'src/app/services/token-storage.service';
//import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-side-nav-item-list',
  templateUrl: './side-nav-item-list.component.html',
  styleUrls: ['./side-nav-item-list.component.css']
})
export class SideNavItemListComponent implements OnInit {
 
  fillerNav = NAV_ITEMS_LIST;
  role:any ;
  email: any;
  showAdminBoard = false;
  showPatientBoard = false;
  showNurseBoard = false;
  showPhysicianBoard = false;
  constructor(private tkn:TokenStorageService) { }
 
  ngOnInit(): void {
    this.role = sessionStorage.getItem('loggedInRole');
    this.email = sessionStorage.getItem('loggedInEmail');
    
 
    this.showAdminBoard = this.role.includes('ROLE_ADMIN');
    this.showPatientBoard = this.role.includes('ROLE_PATIENT');
    this.showNurseBoard = this.role.includes('ROLE_NURSE');
    this.showPhysicianBoard = this.role.includes('ROLE_PHYSICIAN');
 
  
  }
 
}
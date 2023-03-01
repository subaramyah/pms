import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';
import { MatTableDataSource } from '@angular/material/table';
import { HospitalUsersListService } from './hospital-user-list.service';


@Component({
  selector: 'app-hospital-user-list',
  templateUrl: './hospital-user-list.component.html',
  styleUrls: ['./hospital-user-list.component.css']
})
export class HospitalUserListComponent implements OnInit {

  isLoadingResults = true;
  paginatedObj: any = {};
  displayedColumns: string[] = ['id','title', 'firstName', 'lastName', 'emailId', 'contactNumber', 'dob', 'gender','role','action'];
  title = 'profileData';
  status:any;

  userDetails:any;
  
 // public patientTableData: Array<any> = [];
  dataSource = new MatTableDataSource();
  isVisible: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private hospitalUsersListService:HospitalUsersListService) {

      this.getNurses();
      // this.getPhysicians();
  }

  // @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ngOnInit(): void {
    //this.allProfileSVC.getAllHospitalUserprofiles().subscribe(data =>this.dataSource.data=data );
   //this.dataSource.data.push(property)
  
   console.log(this.dataSource)
  }

  delete_user(userId:any)
  {
    
     //this.deleteSvc.deleteHospitalUser(userId).subscribe(data=>this.status = 'Delete successful');
     this.dataSource.data = this.dataSource.data
    //  .filter(i => i !== row)
    //  .map((i, idx) => (i.position = (idx + 1), i));
    this.ngOnInit();
    
  }

  getNurses(){
    this.hospitalUsersListService.getNurses().subscribe(
      (resp)=>{
        console.log(resp);
        this.userDetails = resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  // getPhysicians(){
  //   this.hospitalUsersListService.getPhysician().subscribe(
  //     (resp)=>{
  //       console.log(resp);
  //       this.userDetails = resp;
  //     },
  //     (err)=>{
  //       console.log(err);
  //     }
  //   );
  // }

  // physician(event: any){
  //   this.isVisible = false;
  // }

  nurse(){

  }
}

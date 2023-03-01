import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InboxServiceService } from '../inbox-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface DialogData {
  text_message: string;
  msg_id: number;
  sender_id : number;
  sender_name : string;
}

export interface MessageElement {
  msg_id: number;
  physicians: string;
  message_body:string;
  date:any;
}


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit ,AfterViewInit{
  displayedColumns: string[] = ['msg_id','sender_name', 'message_body', 'date','Action'];
  title = 'messages';
  // public messages: Array<any> = [];
  messages: any = {};
  text_message: any;
  physicians: any;
  senderList: any = {};
  //myDate = new Date();

  dataSource1 = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
  }
  constructor( private inboxService: InboxServiceService,public dialog: MatDialog, private _snackBar: MatSnackBar, private _router: Router) { }

  ngOnInit(): void {
    this.inboxService.getMessages().subscribe(data => {
      console.log(data);
      this.dataSource1.data=data});
    this.inboxService.getSenderDetails().subscribe((dropdown) => {
      console.log(dropdown);
      this.senderList = dropdown});   
  }
  openDialog(row : any): void {
    const dialogRef = this.dialog.open(DialogReplyDialog, {
      width: '250px',
      data: {msg_id: row.msg_id, text_message: this.text_message, sender_id : row.sender_id, sender_name : row.sender_name}
    });
    
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  sendMessage(physicians: any, text_message: any) : void{
    const body = { physicians : physicians, message_body : text_message,date:new Date()};
    this.inboxService.sendMessage(body).subscribe(data => {
      console.log(data);
    })
    // physicians = "";
    // text_message = "";
    // this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open("Message sent succesfully", "close", {
      duration: 2000,
    });
    this.reloadCurrentRoute();
  }

  isReplied(row:any): boolean{
    return row.is_replied;
  } 

  cancelMessage(messageId : number) : void{
    this.inboxService.cancelMessage(messageId);
    this.reloadCurrentRoute();
  }
  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);

    });
  }


}
@Component({
  selector: 'dialog-reply-dialog',
  templateUrl: 'dialog-reply-dialog.html',
})
export class DialogReplyDialog {
  text_message: any;
  id: any;

  constructor( private inboxService: InboxServiceService, private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogReplyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickReply(data: any):void{
    //this.dialogRef.close();
    const body = {sender_id : 1, receiver_id : data.sender_id, message_body : data.text_message, parent_msg_id : data.msg_id};
    this.inboxService.replyMessage(body).subscribe(data => {
    })
    this.dialogRef.close();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open("Reply Message sent succesfully", "close", {
      duration: 2000,
    });
    this.reloadCurrentRoute();
  }

  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);
    });
  }

}
  




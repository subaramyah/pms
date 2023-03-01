import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarAlertService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(alertMsg: string, actionMsg: string, time: number): void {
    this.snackBar.open(alertMsg, actionMsg, {
      duration: time,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}

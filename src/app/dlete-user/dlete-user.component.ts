import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dlete-user',
  templateUrl: './dlete-user.component.html',
  styleUrls: ['./dlete-user.component.css']
})
export class DleteUserComponent {
  constructor(
    public dialogRef: MatDialogRef<DleteUserComponent>,
   
  ) {}
  onConfirm(): void {
    this.dialogRef.close('confirm');
  }

  onCancel(): void {
    this.dialogRef.close('cancel');
  }
}

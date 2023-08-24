import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dlete-service',
  templateUrl: './dlete-service.component.html',
  styleUrls: ['./dlete-service.component.css']
})
export class DleteServiceComponent {
  constructor(
    public dialogRef: MatDialogRef<DleteServiceComponent>,
   
  ) {}

  onConfirm(): void {
    this.dialogRef.close('confirm');
  }

  onCancel(): void {
    this.dialogRef.close('cancel');
  }
}

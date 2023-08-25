import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dlete-departement',
  templateUrl: './dlete-departement.component.html',
  styleUrls: ['./dlete-departement.component.css']
})
export class DleteDepartementComponent {
  constructor(
    public dialogRef: MatDialogRef<DleteDepartementComponent>,
   
  ) {}

  onConfirm(): void {
    this.dialogRef.close('confirm');
  }

  onCancel(): void {
    this.dialogRef.close('cancel');
  }
}


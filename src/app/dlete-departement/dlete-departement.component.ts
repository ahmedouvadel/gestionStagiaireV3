import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dlete-departement',
  templateUrl: './dlete-departement.component.html',
  styleUrls: ['./dlete-departement.component.css']
})
export class DleteDepartementComponent {
  constructor(
    public dialogRef: MatDialogRef<DleteDepartementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close('confirm');
  }

  onCancel(): void {
    this.dialogRef.close('cancel');
  }
}



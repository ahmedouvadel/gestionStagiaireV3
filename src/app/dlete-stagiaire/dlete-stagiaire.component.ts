import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dlete-stagiaire',
  templateUrl: './dlete-stagiaire.component.html',
  styleUrls: ['./dlete-stagiaire.component.css']
})
export class DleteStagiaireComponent {
  constructor(
    public dialogRef: MatDialogRef<DleteStagiaireComponent>,
   
  ) {}

  onConfirm(): void {
    this.dialogRef.close('confirm');
  }

  onCancel(): void {
    this.dialogRef.close('cancel');
  }
}

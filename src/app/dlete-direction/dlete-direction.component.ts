import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dlete-direction',
  templateUrl: './dlete-direction.component.html',
  styleUrls: ['./dlete-direction.component.css']
})
export class DleteDirectionComponent {
  constructor(
    public dialogRef: MatDialogRef<DleteDirectionComponent>,

  ) {}

  onConfirm(): void {
    this.dialogRef.close('confirm');
  }

  onCancel(): void {
    this.dialogRef.close('cancel');
  }
}

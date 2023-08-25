import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-direction',
  templateUrl: './edit-direction.component.html',
  styleUrls: ['./edit-direction.component.css']
})
export class EditDirectionComponent {
  constructor(public dialogRef: MatDialogRef<EditDirectionComponent>) {}
  //fct fermer formulaire
  cancelForm() {
    this.dialogRef.close(); // Fermer le dialogue
  }
}



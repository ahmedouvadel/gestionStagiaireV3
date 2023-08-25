import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  constructor(public dialogRef: MatDialogRef<EditUserComponent>) {}

  //fct fermer formulaire 
  cancelForm() {
    this.dialogRef.close(); // Fermer le dialogue
  }
}

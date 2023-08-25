import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.css']
})
export class EditDepartementComponent {
  constructor(public dialogRef: MatDialogRef<EditDepartementComponent>) {}
  //fct fermer formulaire 
  cancelForm() {
    this.dialogRef.close(); // Fermer le dialogue
  }
}

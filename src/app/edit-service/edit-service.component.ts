import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent {
  constructor(public dialogRef: MatDialogRef<EditServiceComponent>) {}
  //fct fermer formulaire 
  cancelForm() {
    this.dialogRef.close(); // Fermer le dialogue
  }
}

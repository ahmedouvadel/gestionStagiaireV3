import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {

  constructor(public dialogRef: MatDialogRef<AddServiceComponent>) {}
  //fct fermer formulaire 
  cancelForm() {
    this.dialogRef.close(); // Fermer le dialogue
  }
}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-direction',
  templateUrl: './add-direction.component.html',
  styleUrls: ['./add-direction.component.css']
})
export class AddDirectionComponent {
  constructor(public dialogRef: MatDialogRef<AddDirectionComponent>) {}
  //fct fermer formulaire
  cancelForm() {
    this.dialogRef.close(); // Fermer le dialogue
  }
}

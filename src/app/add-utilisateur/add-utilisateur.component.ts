import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddUtilisateurComponent>) {}
  //fct fermer formulaire 
  cancelForm() {
    this.dialogRef.close(); // Fermer le dialogue
  }
  ngOnInit(): void {

  }

  

}

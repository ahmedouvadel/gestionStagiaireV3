import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stagiaire',
  templateUrl: './add-stagiaire.component.html',
  styleUrls: ['./add-stagiaire.component.css']
})
export class AddStagiaireComponent implements OnInit {
  form: FormGroup<any>;
  constructor(public dialogRef: MatDialogRef<AddStagiaireComponent>,private fb: FormBuilder) {
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: [''],
      dateDebut: [''],
      dateFin: [''],
      service: [''],
      numeroBadge: [''],
      numeroTelephone: ['']
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Handle form submission
      console.log(this.form.value);
    }
  }
  //fct fermer formulaire 
  cancelForm() {
    this.dialogRef.close(); // Fermer le dialogue
  }
}

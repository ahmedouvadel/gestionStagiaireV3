import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StagiaireModel } from '../model/stagiaire.model';

@Component({
  selector: 'app-add-stagiaire',
  templateUrl: './add-stagiaire.component.html',
  styleUrls: ['./add-stagiaire.component.css']
  
})
export class AddStagiaireComponent implements OnInit {
  form: FormGroup; // Use a single declaration for the form

  constructor(public dialogRef: MatDialogRef<AddStagiaireComponent>, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: [''],
      lastname: [''],
      service: [''],
      cin: [''],
      dateDebut: [''],
      dateFin: [''],
      nbadge: [''],
      numberphone: ['']
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.form.valid) {
      // Handle form submission
      console.log(this.form.value);
      this.dialogRef.close(this.form.value); // Pass the form data to the parent component
    }
  }

  cancelForm() {
    this.dialogRef.close(); // Close the dialog
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DirectionService } from '../services/direction/direction.service';
import { HttpClient } from '@angular/common/http';
import { DirectionModel } from 'src/app/model/direction.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-direction',
  templateUrl: './add-direction.component.html',
  styleUrls: ['./add-direction.component.css']
})
export class AddDirectionComponent implements OnInit {
  direction!: DirectionModel
  DirectionFormGroup!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<AddDirectionComponent>,
    private fb : FormBuilder,
    private router : Router,
    private SrvDirection: DirectionService) {}
  //fct fermer formulaire
  cancelForm() {
    this.dialogRef.close(); // Fermer le dialogue
  }
  ngOnInit(): void {
      this.DirectionFormGroup = this.fb.group({
        nomdirection : this.fb.control(null, [Validators.required, Validators.minLength(3) ])
      })
  }

  AddDirection() {
    const newDirection = this.DirectionFormGroup.value;

    // Call the service to add direction
    this.SrvDirection.AddDirection(newDirection).subscribe({
      next: (addedDirection) => {
        alert("Direction Added Successfully");
        this.DirectionFormGroup.reset();

        // Assuming your service adds the direction to the local list automatically,
        // you don't need to push it manually.

        // If you need to manually add it to the local list, you can uncomment the next line.
        // this.SrvDirection.direction.push(addedDirection);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  getErrorMessage(fieldnomdirection:string, error: ValidationErrors) {
    if(error['required']) {
      return fieldnomdirection + " est Obligatoire";
    } else if(error['minlength']) {
      return fieldnomdirection + " devrait avoir au moins " + error['minlength']['requiredLength']+" lettre";

    } else return "";
  }

  OpenListDirection() {
    this.dialogRef.close();
  }

}

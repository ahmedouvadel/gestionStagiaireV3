import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DirectionService } from '../services/direction/direction.service';

@Component({
  selector: 'app-add-direction',
  templateUrl: './add-direction.component.html',
  styleUrls: ['./add-direction.component.css']
})
export class AddDirectionComponent implements OnInit {

  DirectionFormGroup!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<AddDirectionComponent>,
    private fb : FormBuilder,
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

  AddDirection(){
    let Direction = this.DirectionFormGroup.value;
    this.SrvDirection.AddDirection(Direction).subscribe({
      next :(data)=> {
        alert("Direction Ajouter Success")
        this.DirectionFormGroup.reset();
      },
      error:(err)=> {
        console.log(err);
      }
    })
  }

  getErrorMessage(fieldnomdirection:string, error: ValidationErrors) {
    if(error['required']) {
      return fieldnomdirection + " est Obligatoire";
    } else if(error['minlength']) {
      return fieldnomdirection + " devrait avoir au moins " + error['minlength']['requiredLength']+" lettre";

    } else return "";
  }

}

import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartementComponent } from '../add-departement/add-departement.component';
import { DleteDepartementComponent } from '../dlete-departement/dlete-departement.component';
import { EditDepartementComponent } from '../edit-departement/edit-departement.component';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  Departement! : Array<any>

constructor(
  private router: Router,private dialog: MatDialog 
) {}



ngOnInit(): void {

  this.Departement =[
    {id: 1, Departement:"DTI",Direction :"gg" },
    {id: 2, Departement:"DTI",Direction :"k" },

    {id: 3, Departement:"DTI",Direction :"aa" },

    {id: 4, Departement:"DTI",Direction :"aa" },

  ]

}
openDepartementDialog() {
  // Ouvrir la boîte de dialogue pour ajouter un nouveau depatement
  const dialogRef = this.dialog.open(AddDepartementComponent, {
    data: { action: 'Ajouter' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Effectuer l'ajout ici avec le résultat
    }
  });
}
openDeleteConfirmationDialog(stagiaireId: number) {
  const dialogRef = this.dialog.open(DleteDepartementComponent, {
    width: '300px',
    data: stagiaireId
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'confirm') {
      // Appel à la méthode de suppression du stagiaire
      this.deleteStagiaire(stagiaireId);
    }
  });
}

deleteStagiaire(stagiaireId: number) {
  // Implémentez ici la logique de suppression du stagiaire
}
openUpdateStagiaireDialog() {
  // Ouvrir la boîte de dialogue pour ajouter un nouveau stagiaire
  const dialogRef = this.dialog.open(EditDepartementComponent, {
    data: { action: 'Ajouter' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Effectuer l'ajout ici avec le résultat
    }
  });
}
}

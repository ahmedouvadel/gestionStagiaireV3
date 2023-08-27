import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddDepartementComponent } from '../add-departement/add-departement.component';
import { MatDialog } from '@angular/material/dialog';
import { AddDirectionComponent } from '../add-direction/add-direction.component';
import { DleteDirectionComponent } from '../dlete-direction/dlete-direction.component';
import { EditDirectionComponent } from '../edit-direction/edit-direction.component';
import { AuthentificaionService } from '../services/authentificaion.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
 Direction!: Array<any>
  constructor(
    private router : Router,
    private dialog : MatDialog,
    public authService: AuthentificaionService
  ) {}

  /**event(){
    this.router.navigate(['direction/add'])
  } */

  ngOnInit(): void {
    this.Direction =[
      {id: 1, Direction:"DTI" },
      {id: 2, Direction:"DSI"},

      {id: 3, Direction:"D700"},

      {id: 4, Direction:"D600" },

    ]

  }

  openAddDirectionDialog() {
    // Ouvrir la boîte de dialogue pour ajouter un nouveau stagiaire
    const dialogRef = this.dialog.open(AddDirectionComponent, {
      width: '450px',
      data: { action: 'Ajouter' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }
   openDeleteConfirmationDialog(D : any) {
    const dialogRef = this.dialog.open(DleteDirectionComponent, {
      width: '300px',
      data: this.deleteStagiaire
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        // Appel à la méthode de suppression du stagiaire
        this.deleteStagiaire(D);
      }
    });
  }

  deleteStagiaire(stagiaireId: number) {
    // Implémentez ici la logique de suppression du stagiaire
  }
  openUpdateStagiaireDialog() {
    // Ouvrir la boîte de dialogue pour ajouter un nouveau stagiaire
    const dialogRef = this.dialog.open(EditDirectionComponent, {
      data: { action: 'Ajouter' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }


}

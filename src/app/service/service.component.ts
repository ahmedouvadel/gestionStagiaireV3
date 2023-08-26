import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddServiceComponent } from '../add-service/add-service.component';
import { DleteServiceComponent } from '../dlete-service/dlete-service.component';
import { MatDialog } from '@angular/material/dialog';
import { EditServiceComponent } from '../edit-service/edit-service.component';
import { AuthentificaionService } from '../services/authentificaion.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  // pour Liste les Services
  Service! : Array<any>

  constructor(
    private router : Router,
    private dialog: MatDialog,
    public authService: AuthentificaionService
  ) {}
  /** event pour ajoute un service */

  event(){
    this.router.navigate(['service/add'])
  }

  ngOnInit(): void {

    this.Service = [
      {id : 1, nomService:"Genie Logiciel", nomDepartement:"DSI"},
      {id : 2, nomService:"Reseau informatique", nomDepartement:"DSI"},
      {id : 3, nomService:"SAP", nomDepartement:"DSI"},
      {id : 4, nomService:"D610", nomDepartement:"D600"},
      {id : 5, nomService:"D720", nomDepartement:"D700"},
    ]

  }
  openAddSeviceDialog() {
    // Ouvrir la boîte de dialogue pour ajouter un nouveau stagiaire
    const dialogRef = this.dialog.open(AddServiceComponent, {
      data: { action: 'Ajouter' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }
  openDeleteConfirmationDialog(stagiaireId: number) {
    const dialogRef = this.dialog.open(DleteServiceComponent, {
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
    const dialogRef = this.dialog.open(EditServiceComponent, {
      data: { action: 'Ajouter' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }
}


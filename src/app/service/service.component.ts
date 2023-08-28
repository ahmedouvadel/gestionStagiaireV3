import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddServiceComponent } from '../add-service/add-service.component';
import { DleteServiceComponent } from '../dlete-service/dlete-service.component';
import { MatDialog } from '@angular/material/dialog';
import { EditServiceComponent } from '../edit-service/edit-service.component';
import { AuthentificaionService } from '../services/authentificaion.service';
import { ServiceService } from '../services/service/service.service';
import { ServiceModel } from '../model/service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  // pour Liste les Services
  service : ServiceModel[]= [];
  ErrorMessage! : string

  constructor(
    private router : Router,
    private dialog: MatDialog,
    public authService: AuthentificaionService,
    private SrvService: ServiceService
  ) {}
  /** event pour ajoute un service */

  event(){
    this.router.navigate(['service/add'])
  }

  ngOnInit(): void {
    this.SrvService.getAllService().subscribe({
      next : (data)=> {
        this.service=data;
      },
      error : (err) => {
        this.ErrorMessage=err
      }
    })

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


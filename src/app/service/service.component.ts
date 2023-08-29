import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddServiceComponent } from '../add-service/add-service.component';
import { DleteServiceComponent } from '../dlete-service/dlete-service.component';
import { MatDialog } from '@angular/material/dialog';
import { EditServiceComponent } from '../edit-service/edit-service.component';
import { AuthentificaionService } from '../services/authentificaion.service';
import { ServiceService } from '../services/service/service.service';
import { ServiceModel } from '../model/service.model';
import { DepartementComponent } from '../departement/departement.component';
import { DepartementService } from '../services/departement/departement.service';
import { DepartementModel } from '../model/departement.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  // pour Liste les Services
  service : ServiceModel[]= [];
  Departement! : DepartementModel[]
  ErrorMessage! : string

  constructor(
    private router : Router,
    private dialog: MatDialog,
    public authService: AuthentificaionService,
    private SrvService: ServiceService,
    private DeptService : DepartementService
  ) {}
  /** event pour ajoute un service */

  event(){
    this.router.navigate(['service/add'])
  }

  ngOnInit(): void {
    //poud Lister Les Service
    this.SrvService.getAllService().subscribe({
      next : (data)=> {
        this.service=data;
      },
      error : (err) => {
        this.ErrorMessage=err
      }
    })
     // Pour Lister Les Departement
    this.DeptService.getAllDepartement().subscribe({
      next : (data)=> {
        this.Departement=data
      },
      error : (err)=> {
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
  openDeleteConfirmationDialog(S: ServiceModel) {
    const dialogRef = this.dialog.open(DleteServiceComponent, {
      width: '300px',
      data: this.service
    });




    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        // Appel à la méthode de suppression du stagiaire
        this.SrvService.deleteService(S.id).subscribe({
          next : (data) => {
            let index = this.service.indexOf(S);
            this.service.splice(index, 1);
          }
        })
      }
    });
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


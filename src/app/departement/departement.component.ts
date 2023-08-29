import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddDepartementComponent } from '../add-departement/add-departement.component';
import { DleteDepartementComponent } from '../dlete-departement/dlete-departement.component';
import { EditDepartementComponent } from '../edit-departement/edit-departement.component';
import { AuthentificaionService } from '../services/authentificaion.service';
import { DepartementService } from '../services/departement/departement.service';
import { DepartementModel } from '../model/departement.model';
import { DirectionService } from '../services/direction/direction.service';
import { DirectionModel } from '../model/direction.model';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  Departement: DepartementModel[]= []
  direction: DirectionModel[]=[]
  ErrorMessage! : string
  searchTerm: string = '';
  selectedService: string = '';
  filteredDepartments: DepartementModel[] = [];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    public authService: AuthentificaionService,
    private DeptService : DepartementService,
    private DirDirection : DirectionService,

  ) {}

  ngOnInit(): void {
   //basculation vers la programmetion asynchrones
    this.DeptService.getAllDepartement().subscribe({
      next : (data) => {
        this.Departement=data
      },
      error : (err) => {
        this.ErrorMessage=err;
      }
    });
    this.filterDepartments(); // Initial filter

    //Pour Lister Tous les Direction
    this.DirDirection.getAllDirection().subscribe({
    next : (data)=> {
      this.direction=data
    },
    error: (err)=> {
      this.ErrorMessage=err
    }
   })

   this.getAllDepartement;

  }

  //GettAllDepartement
  getAllDepartement(){
    this.DeptService.getAllDepartement().subscribe({
      next : (data)=> {
        this.Departement=data
      },
      error : (err)=> {
        this.ErrorMessage=err
      }

    })
   }

  filterDepartments(): void {
    this.filteredDepartments = this.Departement.filter(department =>
      (department.nomdepartement.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      department.nomdepartement.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedService === '' || department.nomdepartement === this.selectedService)
    );
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

  openDeleteConfirmationDialog(D : DepartementModel) {
    const dialogRef = this.dialog.open(DleteDepartementComponent, {
      width: '300px',
      data: this.Departement
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        // Appel à la méthode de suppression du Departement
        this.DeptService.deleteDepartement(D.id).subscribe({
          next : (data) => {
            let index = this.Departement.indexOf(D);
            this.Departement.splice(index, 1);
          }
        })
      }
    });
  }


   // Buttun F
  openUpdateStagiaireDialog() {
    // Ouvrir la boîte de dialogue pour Modifier un Departement
    const dialogRef = this.dialog.open(EditDepartementComponent, {
      data: { action: 'Ajouter' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }
   //Pour Lister La Direction Par Nom
  getDirectionName(directionId: number): string {
    const direction: DirectionModel | undefined = this.DirDirection.direction.find(d => d.id === directionId);
    return direction ? direction.nomdirection : 'N/A';
  }


}

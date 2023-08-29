import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddDepartementComponent } from '../add-departement/add-departement.component';
import { MatDialog } from '@angular/material/dialog';
import { AddDirectionComponent } from '../add-direction/add-direction.component';
import { DleteDirectionComponent } from '../dlete-direction/dlete-direction.component';
import { EditDirectionComponent } from '../edit-direction/edit-direction.component';
import { AuthentificaionService } from '../services/authentificaion.service';
import { DirectionService } from '../services/direction/direction.service';
import { DirectionModel } from '../model/direction.model';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
 direction: DirectionModel[]=[]
 ErrorMessage! : string
 searchTerm: string = '';
 selectedDirection: string = '';
 filteredDirection: DirectionModel[] = [];
  constructor(
    private router : Router,
    private dialog : MatDialog,
    public authService: AuthentificaionService,
    private DirDirection: DirectionService
  ) {}

  /**event(){
    this.router.navigate(['direction/add'])
  } */

  ngOnInit(): void {
    this.DirDirection.getAllDirection().subscribe({
      next: (data) => {
        this.direction = data;
        this.applyFilter(); // Call applyFilter to initialize filteredDirection
      },
      error: (err) => {
        this.ErrorMessage = err;
      }
    });
  }



  applyFilter(): void  {
    this.filteredDirection = this.direction.filter(direction =>
      (direction.nomdirection.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      direction.nomdirection.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedDirection === '' || direction.nomdirection === this.selectedDirection)
    );
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
      data: this.direction
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        // Appel à la méthode de suppression du stagiaire
        this.DirDirection.deleteDirection(D.id).subscribe({
          next : (data) => {
            let index = this.direction.indexOf(D);
            this.direction.splice(index, 1);
          }
        })
      }
    });
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

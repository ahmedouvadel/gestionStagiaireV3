import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStagiaireComponent } from '../add-stagiaire/add-stagiaire.component'; // Remplacez par le chemin de votre boîte de dialogue
import { DleteStagiaireComponent } from '../dlete-stagiaire/dlete-stagiaire.component';
import { EditStagiaireComponent } from '../edit-stagiaire/edit-stagiaire.component';
import { AuthentificaionService } from '../services/authentificaion.service';
import { StagiaireService } from '../services/stagiaire/stagiaire.service';
import { StagiaireModel } from '../model/stagiaire.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stagiaire: StagiaireModel[] = []; // Votre liste de stagiaires
  ErrorMesssage! : string
  searchTerm: string = '';
  filteredStagiaires: StagiaireModel[] = [];

  constructor(
    private dialog: MatDialog,
    public authService: AuthentificaionService,
    private stagiaireService: StagiaireService
  ) {}

  ngOnInit(): void {
    this.stagiaireService.getAllStagiaire().subscribe({
      next : (data) => {
        this.stagiaire=data
      },
      error : (err) => {
        this.ErrorMesssage=err
      }
    })

    this.getAllStagiaire;

    this.filteredStagiaires = this.stagiaire;
  }

  //Methode GetAllStagiaire

  getAllStagiaire() {
    this.stagiaireService.getAllStagiaire().subscribe({
      next : (data) => {
        this.stagiaire=data
      },
      error : (err) => {
        this.ErrorMesssage=err
      }
    })
  }

  // Pour filtre les Stagiaire
  filterStagiaires(): void {
    this.filteredStagiaires = this.stagiaire.filter(stagiaire =>
      stagiaire.firstname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      stagiaire.lastname.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openAddStagiaireDialog() {
    const dialogRef = this.dialog.open(AddStagiaireComponent, {
      data: { action: 'Ajouter' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }

  openDeleteConfirmationDialog(S: StagiaireModel) {
    const dialogRef = this.dialog.open(DleteStagiaireComponent, {
      width: '300px',
      data: this.stagiaire
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        // Appel à la méthode de suppression du stagiaire
        this.stagiaireService.deleteStagiaire(S.id).subscribe({
          next : (data) => {
            let index = this.stagiaire.indexOf(S);
            this.stagiaire.splice(index, 1);
          }
        })
      }
    });
  }



  openUpdateStagiaireDialog() {
    const dialogRef = this.dialog.open(EditStagiaireComponent, {
      data: { action: 'Ajouter' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }
}

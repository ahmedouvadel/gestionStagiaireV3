import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStagiaireComponent } from '../add-stagiaire/add-stagiaire.component'; // Remplacez par le chemin de votre boîte de dialogue
import { DleteStagiaireComponent } from '../dlete-stagiaire/dlete-stagiaire.component';
import { EditStagiaireComponent } from '../edit-stagiaire/edit-stagiaire.component';
import { AuthentificaionService } from '../services/authentificaion.service';
import { StagiaireService } from '../services/stagiaire/stagiaire.service';
import { StagiaireModel } from '../model/stagiaire.model';
import { ServiceService } from '../services/service/service.service';
import { ServiceModel } from '../model/service.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe] // Add this line
})
export class HomeComponent implements OnInit {

  stagiaire: StagiaireModel[] = []; // Votre liste de stagiaires
  ErrorMesssage! : string
  service!:ServiceModel
  searchTerm: string = '';
  filteredStagiaires: StagiaireModel[] = [];

  constructor(
    private dialog: MatDialog,
    public authService: AuthentificaionService,
    private stagiaireService: StagiaireService,
    private SrvService : ServiceService
  ) {}
  ngOnInit(): void {
    this.stagiaireService.getAllStagiaire().subscribe({
      next: (data) => {
        this.stagiaire = data.map(stagiaire => ({
          ...stagiaire,
          datedeb: new Date(stagiaire.datedeb), // Convert to Date object
          datefin: new Date(stagiaire.datefin)  // Convert to Date object
        }));
        console.log('Stagiaire data:', this.stagiaire);
        this.filteredStagiaires = this.stagiaire; // Update filteredStagiaires
      },
      error: (err) => {
        this.ErrorMesssage = err;
      }
    });


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

  // ...

openAddStagiaireDialog() {
  const dialogRef = this.dialog.open(AddStagiaireComponent, {
    data: { action: 'Ajouter' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Add the new stagiaire to the list
      this.stagiaire.push(result);
    }
  });
}

// ...


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

  // Function to get the service name based on serviceId
  getServiceName(ServiceId: number): string {
    const service: ServiceModel | undefined = this.SrvService.service.find(s => s.id === ServiceId);
    return service ? service.nomservice : 'N/A';
  }

}

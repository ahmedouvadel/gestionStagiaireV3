import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AddUtilisateurComponent } from '../add-utilisateur/add-utilisateur.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { DleteUserComponent } from '../dlete-user/dlete-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  User! : Array<any>

  constructor(
    private router : Router,private dialog: MatDialog  ){}
    ngOnInit(): void {

      this.User =[
        {id: 1, nom:"Ahmedou", Role:"Admin", },
        {id: 2, nom:"Ahmed12", Role:"User", },
        {id: 3, nom:"Ahmed", Role:"Admin", },

      ]
  
    }
  openAddUserDialog() {
    // Ouvrir la boîte de dialogue pour ajouter un nouveau stagiaire
    const dialogRef = this.dialog.open(AddUtilisateurComponent, {
      data: { action: 'Ajouter' },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }
  openDeleteUserDialog(stagiaireId: number) {
    const dialogRef = this.dialog.open(DleteUserComponent, {
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
  openUpdateUserDialog() {
    // Ouvrir la boîte de dialogue pour ajouter un nouveau stagiaire
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: { action: 'Ajouter' },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }
}


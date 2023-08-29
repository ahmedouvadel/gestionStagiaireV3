import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AddUtilisateurComponent } from '../add-utilisateur/add-utilisateur.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { DleteUserComponent } from '../dlete-user/dlete-user.component';
import { User } from '../model/user.model';
import { AuthentificaionService } from '../services/authentificaion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  users: User[] = [];
  ErrorMesssage!:Error
  searchTerm: string = '';
  filteredUsers: User[] = [];

  constructor(
    private router : Router,
    private dialog: MatDialog,
    private UserService: AuthentificaionService
    ){}


    ngOnInit(): void {
      this.filterUsers(); // Initial filter

      // Retrieve user data
      this.UserService.getAllUsers().subscribe(
        (data) => {
          this.users = data;
          this.filterUsers(); // Filter users after loading data
        },
        (error) => {
          console.error(error);
        }
      );
      this.getAllUsers;
      this.filteredUsers = this.users;


    }

    getAllUsers() {
      this.UserService.getAllUsers().subscribe({
        next : (data) => {
          this.users=data
        },
        error : (err) => {
          this.ErrorMesssage=err
        }
      })
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
  openDeleteUserDialog(U: User) {
    const dialogRef = this.dialog.open(DleteUserComponent, {
      width: '300px',
      data: this.users
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        // Appel à la méthode de suppression du stagiaire
        this.UserService.deleteUsers(U.id).subscribe({
          next : (data) => {
            let index = this.users.indexOf(U);
            this.users.splice(index, 1);
          }
      })
    }
  });
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

  filterUsers(): void {
    this.filteredUsers = this.users.filter(
      (user) =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.roles.join(' ').toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}


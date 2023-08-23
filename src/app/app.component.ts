// Importation des modules nécessaires depuis Angular
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// Définition du composant Angular avec le sélecteur 'app-root'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Fichier HTML associé au composant
  styleUrls: ['./app.component.css']   // Fichier CSS associé au composant
})
export class AppComponent implements OnInit {
  // Propriété pour le titre du composant
  title = 'Admin Ahmedou ';

  // Propriété pour le contrôle de l'état de la barre latérale (ouverture/fermeture)
  sideBarOpen = true;

  // Propriété pour indiquer si la page actuelle est la page de connexion
  isLoginPage: boolean = false;

  // Constructeur du composant, injecte le service Router
  constructor(private router: Router) {}

  // Méthode exécutée lors de l'initialisation du composant
  ngOnInit() {
    // Abonnement aux événements de navigation du Router
    this.router.events.subscribe(event => {
      // Vérification si l'événement est une instance de NavigationEnd
      if (event instanceof NavigationEnd) {
        // Mise à jour de la propriété isLoginPage en fonction de l'URL de navigation
        this.isLoginPage = event.url === '/';
      }
    });
  }

  // Méthode pour basculer l'état de la barre latérale
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}

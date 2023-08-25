import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePeriodeComponent } from '../delete-periode/delete-periode.component';
import { EvoyerMailComponent } from '../evoyer-mail/evoyer-mail.component';

@Component({
  selector: 'app-status-echec',
  templateUrl: './status-echec.component.html',
  styleUrls: ['./status-echec.component.css']
})
export class StatusEchecComponent {
  currentTab: string = 'details';

  changeTab(tab: string) {
    this.currentTab = tab;
  }
  Stagiaire! : Array<any>

  constructor(
    private dialog: MatDialog  ){}

  

  ngOnInit(): void {

    this.Stagiaire =[
      {id: 1, nom:"Ahmedou Vadel", PriodeStage:"Janvier 2022 - Mars 2022	", Etat:"Terminé" },
      {id: 2, nom:"Ahmedou", PriodeStage:"Avril 2023 - Juin 2023		", Etat:"En cours" },
      {id: 3, nom:"Ahmedou", PriodeStage:"Janvier 2023 - Mars 2023	", Etat:"Terminé" },


     ]

  }


  EnvoyerMaileDialog() {
    // Ouvrir la boîte de dialogue pour ajouter un nouveau stagiaire
    const dialogRef = this.dialog.open(EvoyerMailComponent, {
      data: { action: 'Envoyer' },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Effectuer l'ajout ici avec le résultat
      }
    });
  }
  
   
}


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StagiaireModel } from 'src/app/model/stagiaire.model';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  stagiaire! : Array<StagiaireModel>
  constructor() {
    this.stagiaire =[
      {id: 1, firstname:"Ahmedou", lastname:"Vadel", cin:"563214", datedeb:"23-01-04",datefin:"23-02-04" , nbadge:1232 , numberphone: "44223507",ServiceId:1},
      {id: 2, firstname:"Ftimetou", lastname:"Meyn", cin:"563214" ,datedeb:"23-07-15",datefin:"23-08-14" , nbadge:2132 ,numberphone: "22566478" ,ServiceId:1 },
      {id: 3, firstname:"Mohamed", lastname:"Sidine",cin:"563214" ,datedeb:"23-11-22",datefin:"23-10-21" , nbadge:1245 , numberphone: "44699878" ,ServiceId:1  },
      {id: 4, firstname:"Abdallahi", lastname:"Mohamedou", cin:"563214", datedeb:"23-05-04",datefin:"23-04-04" , nbadge:1245 ,numberphone: "36547856", ServiceId:1 },
      {id: 5, firstname:"Mohamed", lastname:"Mahfoud", cin:"563214", datedeb:"23-07-04",datefin:"23-08-05" , nbadge:3215 ,numberphone: "26547895", ServiceId:1 }
    ]
   }

   getAllStagiaire() : Observable<StagiaireModel[]> {
    return of(this.stagiaire);
   }
  //Delete Stagiaire
   public deleteStagiaire(id : number) : Observable<Boolean> {
    this.stagiaire= this.stagiaire.filter(p=>p.id!=id);
    return of(true)

   }
}

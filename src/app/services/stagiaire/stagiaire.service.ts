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
      {id: 1, firstname:"Ahmedou", lastname:"Vadel", cin:"563214", numberphone: "44223507", ServiceId:1},
      {id: 2, firstname:"Ftimetou", lastname:"Meyn", cin:"563214",numberphone: "22566478", ServiceId:1 },
      {id: 3, firstname:"Mohamed", lastname:"Sidine",cin:"563214", numberphone: "44699878", ServiceId:1  },
      {id: 4, firstname:"Abdallahi", lastname:"Mohamedou", cin:"563214", numberphone: "36547856", ServiceId:1 },
      {id: 5, firstname:"Mohamed", lastname:"Mahfoud", cin:"563214",numberphone: "26547895", ServiceId:1 }
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

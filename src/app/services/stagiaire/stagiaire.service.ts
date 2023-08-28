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
      {id: 1, firstname:"Ahmedou", lastname:"Vadel", cin:"563214", numberphone: "44223507",},
      {id: 2, firstname:"Ftimetou", lastname:"Meyn", cin:"563214",numberphone: "22566478",  },
      {id: 3, firstname:"Mohamed", lastname:"Sidine",cin:"563214", numberphone: "44699878",   },
      {id: 4, firstname:"Abdallahi", lastname:"Mohamedou", cin:"563214", numberphone: "36547856",  },
      {id: 5, firstname:"Mohamed", lastname:"Mahfoud", cin:"563214",numberphone: "26547895", }
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

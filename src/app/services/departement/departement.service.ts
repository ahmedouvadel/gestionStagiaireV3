import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DepartementModel } from 'src/app/model/departement.model';
import { DirectionModel } from 'src/app/model/direction.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  Departement! : Array<DepartementModel>

  constructor() {

    this.Departement = [
      { id: 1, nomdepartement: 'DSI' , directionId : 1  },
      { id: 2, nomdepartement: 'RSI', directionId : 2 },
      { id: 3, nomdepartement: 'SPA', directionId : 3},
      { id: 4, nomdepartement: 'DTI' , directionId : 4 },
    ];

  }

  //  return tout les Departements

  public getAllDepartement() : Observable<DepartementModel[]> {
    return of(this.Departement);
  }

  //Delete Departement
  public deleteDepartement(id : number) : Observable<Boolean> {
    this.Departement= this.Departement.filter(p=>p.id!=id);
    return of(true)

   }
}

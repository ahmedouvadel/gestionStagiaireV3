import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { ServiceModel } from 'src/app/model/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   service! : Array<ServiceModel>
   ErrorMessage! : string;
  constructor() {
    this.service = [
      {id: 1 , nomservice:"Genie Logiciel", DepartementId:1},
      {id : 2, nomservice:"Reseau informatique", DepartementId:2},
      {id : 3, nomservice:"SAP", DepartementId:3 },
      {id : 4, nomservice:"D610" ,DepartementId:4},
      {id : 5, nomservice:"D720", DepartementId:1},
    ]
  }

  getAllService() : Observable<ServiceModel[]> {
    return of(this.service);
  }

  //Delete Service
  public deleteService(id : number) : Observable<Boolean> {
    this.service= this.service.filter(p=>p.id!=id);
    return of(true)

   }
}

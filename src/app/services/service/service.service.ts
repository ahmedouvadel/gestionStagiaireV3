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
       {id: 1 , nomservice:"Genie Logiciel"},
      {id : 2, nomservice:"Reseau informatique"},
      {id : 3, nomservice:"SAP" },
      {id : 4, nomservice:"D610"},
      {id : 5, nomservice:"D720"}, 
    ]
  }

  getAllService() : Observable<ServiceModel[]> {
    return of(this.service);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DirectionModel } from 'src/app/model/direction.model';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
   direction! : Array<DirectionModel>


  constructor() {
    this.direction =[
      {id: 1, nomdirection:"DTI" },
      {id: 2, nomdirection:"DSI"},

      {id: 3, nomdirection:"D700"},

      {id: 4, nomdirection:"D600" },

    ]
  }

  public getAllDirection() : Observable<DirectionModel[]> {
    return of(this.direction)
  }

  //Delete Direction
  public deleteDirection(id : number) : Observable<Boolean> {
    this.direction= this.direction.filter(p=>p.id!=id);
    return of(true)

   }
}

import { Direction } from '@angular/cdk/bidi';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DirectionModel } from 'src/app/model/direction.model';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {



  direction! : Array<DirectionModel>

  constructor(
    private httpClient: HttpClient

  ) {
    this.direction =[
     /**   {id: 1, nomdirection:"DTI" },
      {id: 2, nomdirection:"DSI"},
      {id: 3, nomdirection:"D700"},
      {id: 4, nomdirection:"D600" },
      {id: 5, nomdirection:"Ftaima" }, */

    ]
  }
  private baseURL = 'http://localhost:8080/api/v1/Stagiaire';

  /*private getMaxDirectionId(): number {
    return Math.max(...this.direction.map(direction => direction.id));
  } */

  /*AddDirection(direction: DirectionModel): Observable<DirectionModel> {
    direction.id = this.getMaxDirectionId() + 1; // Increment the ID
    this.direction.push(direction); // Add to the local list
    return this.HttpClient.post<DirectionModel>(this.baseURL, direction);
  } */

  addDirection(direction: DirectionModel): Observable<DirectionModel> {
    return this.httpClient.post<DirectionModel>(this.baseURL, direction);
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

import { ServiceModel } from "./service.model";

export interface StagiaireModel {
  id:number;
  firstname: string;
  lastname: string;
  cin: string;
  datedeb:Date;
  datefin:Date;
  nbadge:number
  numberphone: string;
  ServiceId : number;


}

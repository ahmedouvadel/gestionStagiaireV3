import { ServiceModel } from "./service.model";

export interface StageModel {
  id:number
  datedeb: Date;
  datefin: Date;
  nbadge: String;
  service: ServiceModel,
}

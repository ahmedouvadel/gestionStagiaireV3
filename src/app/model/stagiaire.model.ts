import { StageModel } from "./stage.model";

export interface StagiaireModel {
  id:string
  firstname: String;
  lastname: String;
  cin: String;
  numberphone: String;
  stage: StageModel;
}

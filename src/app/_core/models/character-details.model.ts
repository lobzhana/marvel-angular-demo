import { ThumbnailModel } from "./thumbnail.model";


export interface CharacterDetailsModel {
  id?: number;
  name?: string;
  description?: string;
  thumbnail?: ThumbnailModel;
}

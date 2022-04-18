import { ThumbnailModel } from "./thumbnail.model";

export interface CharacterModel {
  id?: number;
  name?: string;
  description?: string;
  thumbnail?: ThumbnailModel
}

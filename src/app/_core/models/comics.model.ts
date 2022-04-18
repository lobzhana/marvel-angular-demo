import { ThumbnailModel } from "./thumbnail.model";


export interface ComicsModel {
  id: number;
  name: string;
  thumbnail: ThumbnailModel;
}

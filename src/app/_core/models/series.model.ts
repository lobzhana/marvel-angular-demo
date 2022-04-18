import { ThumbnailModel } from "./thumbnail.model";


export interface SeriesModel {
  id: number;
  name: string;
  thumbnail: ThumbnailModel;
}

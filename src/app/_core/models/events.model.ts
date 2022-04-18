import { ThumbnailModel } from "./thumbnail.model";


export interface EventModel {
  id: number;
  name: string;
  thumbnail: ThumbnailModel;
  start: Date;
  end: Date;
}

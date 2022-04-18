import { CharacterDetailsModel } from "src/app/_core/models/character-details.model";
import { ComicsModel } from "src/app/_core/models/comics.model";
import { EventModel } from "src/app/_core/models/events.model";
import { SeriesModel } from "src/app/_core/models/series.model";

export interface CharacterDetailsState {
  details?: CharacterDetailsModel | undefined,
  comics?: ComicsModel[],
  series?: SeriesModel[],
  events?: EventModel[]
}

export const defaultState: CharacterDetailsState = {

}

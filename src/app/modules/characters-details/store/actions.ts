import { createAction, props } from "@ngrx/store";
import { CharacterDetailsModel } from "src/app/_core/models/character-details.model";
import { ComicsModel } from "src/app/_core/models/comics.model";
import { EventModel } from "src/app/_core/models/events.model";
import { SeriesModel } from "src/app/_core/models/series.model";

const actionName = (name: string) => `[CHARACTER-DETAILS]-${name}`

const initialize = createAction(
  actionName('Initialize'),
  props<{ characterId: string }>()
);

const dataLoadCompleted = createAction(
  actionName('Data Loading Completed'),
  props<{
    details: CharacterDetailsModel,
    comics?: ComicsModel[],
    series?: SeriesModel[],
    events?: EventModel[]
  }>()
);


export const characterDetailsActions = {
  initialize, dataLoadCompleted
}

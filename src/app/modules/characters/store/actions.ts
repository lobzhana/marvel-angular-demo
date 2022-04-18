import { createAction, props } from "@ngrx/store"
import { CharacterModel } from "src/app/_core/models/character.model";

const actionName = (name: string) => `[CHARACTERS]-${name}`

const initialize = createAction(
  actionName('Initialization Start')
);

const search = createAction(
  actionName('Search'),
  props<{ searchValue: string }>()
);

const loadMore = createAction(
  actionName('Load More')
);

const dataLoadCompleted = createAction(
  actionName('Data Load Completed'),
  props<{ characters: CharacterModel[], offset: number; limit: number, total: number }>()
);


export const characterActions = {
  initialize, search, loadMore, dataLoadCompleted
}

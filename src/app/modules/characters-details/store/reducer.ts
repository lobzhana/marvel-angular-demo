import { createReducer, on } from "@ngrx/store";
import { characterDetailsActions } from "./actions";
import { CharacterDetailsState, defaultState } from "./state";


export const characterDetailsReducer = createReducer<CharacterDetailsState>(
  defaultState,

  on(characterDetailsActions.initialize, (state) => {
    return {
      ...state,
      details: undefined,
      comics: [],
      events: [],
      series: [],
    }
  }),
  on(characterDetailsActions.dataLoadCompleted, (state, { details, comics, events, series }) => {
    return {
      ...state,
      details: {
        ...details
      },
      comics: comics,
      events: events,
      series: series
    }
  })

)

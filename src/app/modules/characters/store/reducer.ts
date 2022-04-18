import { createReducer, on } from "@ngrx/store"
import { characterActions } from "./actions"
import { CharactersState, defaultState } from "./state"


export const charactersReducer = createReducer<CharactersState>(
  defaultState,

  on(characterActions.initialize, (state,) => {
    return {
      ...state,
      characters: [],
      offset: 0,
      inProgress: true
      // for inprogress better idea would be if we use http interceptor or http service and sum up
      // request and response, when there is active request we can set state to in progress
      //but there is no time for refactoring now :))
    }
  }),

  on(characterActions.search, (state, { searchValue }) => {
    return {
      ...state,
      searchValue: searchValue,
      characters: [],
      offset: 0,
      inProgress: true
    }
  }),

  on(characterActions.loadMore, (state) => {
    return {
      ...state,
      offset: state.offset + state.limit,
      inProgress: true
    }
  }),


  on(characterActions.dataLoadCompleted, (state, action) => {
    return {
      ...state,
      characters: [...(state.characters ?? []), ...action.characters],
      limit: action.limit,
      offset: action.offset,
      total: action.total,
      inProgress: false
    }
  })

);

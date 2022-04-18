import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CharactersState } from "./state";

const feature = createFeatureSelector<CharactersState>('characters');

const characters = createSelector(feature, (state) => state.characters);

const offset = createSelector(feature, (state) => state.offset)

const limit = createSelector(feature, (state) => state.limit)

const searchValue = createSelector(feature, (state) => state.searchValue)

const inProgress = createSelector(feature, (state) => state.inProgress)

export const selectors = {
  characters, offset, limit, searchValue, inProgress
}


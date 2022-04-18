import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CharacterDetailsState } from "./state";

const feature = createFeatureSelector<CharacterDetailsState>('character-details');

const details = createSelector(feature, (state) => state.details);
const comics = createSelector(feature, (state) => state.comics);
const series = createSelector(feature, (state) => state.series);
const events = createSelector(feature, (state) => state.events);

export const selectors = {
  details, comics, series, events
}


import { CharacterModel } from "src/app/_core/models/character.model";

export interface CharactersState {
  characters?: CharacterModel[],
  searchValue?: string;
  offset: number;
  total: number;
  limit: number;
  inProgress?: boolean
}


export const defaultState = {
  characters: [],
  total: 0,
  offset: 0,
  limit: 20
};

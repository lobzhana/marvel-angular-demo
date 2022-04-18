import { CharacterApiModel } from "./character-api.model";


export interface ApiResponse {
  code: number;
  data: ApiResponseData
}


export interface ApiResponseData {
  count: number;
  limit: number;
  offset: number;
  results: CharacterApiModel[];
  total: number;
}

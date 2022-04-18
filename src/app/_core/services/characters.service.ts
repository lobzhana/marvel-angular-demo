import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse, ApiResponseData } from '../api-models/api-response';
import { HttpClientService } from './http-client.service';


export interface ApiRequest {
  nameStartsWith?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined
}

@Injectable()
export class CharactersService {

  constructor(private httpClient: HttpClientService) { }

  getCharacters(params: ApiRequest): Observable<ApiResponseData> {

    if (!params?.nameStartsWith) delete params.nameStartsWith;

    return this.httpClient.get<ApiResponse>('/characters', {
      params: {
        ...params
      }
    }).pipe(
      map((response) => response?.data)
    );
  }

}

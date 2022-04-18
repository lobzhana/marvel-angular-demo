import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { map, Observable } from 'rxjs';
import { CharacterApiModel } from '../api-models/character-api.model';

@Injectable()
export class CharacterDetailsService {
  constructor(private httpClient: HttpClientService) { }

  getCharacterDetails(characterId: string): Observable<CharacterApiModel> {

    return this.httpClient.get(`/characters/${characterId}`).pipe(
      map((response: any) => response?.data.results[0])
    );
  }

}



import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { ApiResponseData } from 'src/app/_core/api-models/api-response';
import { CharactersService } from 'src/app/_core/services/characters.service';
import { characterActions } from './actions';
import { selectors } from './selectors';

@Injectable()
export class CharactersEffects {

  constructor(private actions$: Actions, private store: Store, private service: CharactersService) { }

  private dataLoadCompleted(response: ApiResponseData) {
    return characterActions.dataLoadCompleted({
      characters: response.results.map((c) => ({
        id: c.id,
        thumbnail: c.thumbnail,
        description: c.description,
        name: c.name
      })),
      offset: response.offset,
      limit: response.limit,
      total: response.total
    })
  }

  $search = createEffect(() => {

    return this.actions$.pipe(
      ofType(
        characterActions.search
      ),
      withLatestFrom(
        this.store.select(selectors.searchValue),
      ),
      switchMap(([, searchValue]) => {

        return this.service.getCharacters({ nameStartsWith: searchValue })
          .pipe(
            map((response) => this.dataLoadCompleted(response))
          )
      })
    )
  })

  loadData$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(
        characterActions.initialize,
        characterActions.loadMore
      ),
      withLatestFrom(
        this.store.select(selectors.searchValue),
        this.store.select(selectors.offset),
        this.store.select(selectors.limit)
      ),
      mergeMap(([, searchValue, offset, limit]) => {

        return this.service.getCharacters({ nameStartsWith: searchValue, offset, limit })
          .pipe(
            map((response) => this.dataLoadCompleted(response))
          )
      })
    )
  })

}

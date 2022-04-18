

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, map, mergeMap } from 'rxjs';
import { CharacterDetailsService } from 'src/app/_core/services/character-details.service';
import { HttpClientService } from 'src/app/_core/services/http-client.service';
import { characterDetailsActions } from './actions';

@Injectable()
export class CharacterDetailsEffects {
  constructor(
    private service: CharacterDetailsService,
    private http: HttpClientService,
    private actions$: Actions
  ) { }

  // alternative approach would we if we will dispatch multiple actions after getCharacterDetails,
  // for example loadComics, loadSeries, loadEvents and then create supporting effects for them
  // actions can be dispatched from effect or from container component
  // also API itself is not very good, we should not be required to fetch as many requests as here
  // details data should be provided in single request, but it is just a demo API as I see it
  loadData$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(
        characterDetailsActions.initialize,
      ),
      mergeMap(({ characterId }) => {
        return this.service.getCharacterDetails(characterId)
      }),
      mergeMap((details) => {
        return forkJoin([
          forkJoin([
            ...details.comics.items.map(x => this.http.get(x.resourceURI))
          ]),
          forkJoin([
            ...details.series.items.map(x => this.http.get(x.resourceURI))
          ]),
          forkJoin([
            ...details.events.items.map(x => this.http.get(x.resourceURI))
          ])
        ]).pipe(
          map(([comicsResponse, seriesResponse, eventsResponse]) => {
            return {
              comics: comicsResponse.map((x: any) => x.data?.results[0]),
              series: seriesResponse.map((x: any) => x.data?.results[0]),
              events: eventsResponse.map((x: any) => x.data?.results[0])
            }
          }),
          map(({ comics, series, events }) => {

            return characterDetailsActions.dataLoadCompleted({
              details: {
                id: details.id,
                description: details.description,
                name: details.name,
                thumbnail: details.thumbnail,
              },
              comics: comics.map((c: any) => ({ id: c.id, name: c.title, thumbnail: c.thumbnail })),
              series: series.map((c: any) => ({ id: c.id, name: c.title, thumbnail: c.thumbnail })),
              events: events.map((c: any) => ({ id: c.id, name: c.title, thumbnail: c.thumbnail, start: c.start, end: c.end }))

            })
          }))
      }),
    )
  })
}

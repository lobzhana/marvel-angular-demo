import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterDetailsModel } from 'src/app/_core/models/character-details.model';
import { ComicsModel } from 'src/app/_core/models/comics.model';
import { EventModel } from 'src/app/_core/models/events.model';
import { SeriesModel } from 'src/app/_core/models/series.model';
import { characterDetailsActions } from '../../store/actions';
import { selectors } from '../../store/selectors';

@Component({
  selector: 'app-details-of-character',
  templateUrl: './details-of-character.component.html',
  styleUrls: ['./details-of-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsOfCharacterComponent implements OnInit {

  character$?: Observable<CharacterDetailsModel | undefined>;
  comics$?: Observable<ComicsModel[] | undefined>;
  series$?: Observable<SeriesModel[] | undefined>;
  events$?: Observable<EventModel[] | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {

    const characterId = this.route.snapshot.paramMap.get('id') as string;

    this.store.dispatch(
      characterDetailsActions.initialize({ characterId: characterId })
    )

    this.character$ = this.store.select(selectors.details);
    this.comics$ = this.store.select(selectors.comics);
    this.series$ = this.store.select(selectors.series);
    this.events$ = this.store.select(selectors.events);
  }

}

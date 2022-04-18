import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from 'src/app/_core/models/character.model';
import { Store } from '@ngrx/store';
import { characterActions } from '../../store/actions';
import { selectors } from '../../store/selectors';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrls: ['./list-of-characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOfCharactersComponent implements OnInit {

  characters$?: Observable<CharacterModel[] | undefined>;
  inProgress$?: Observable<boolean | undefined>

  constructor(private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(characterActions.initialize());

    this.characters$ = this.store.select(selectors.characters);
    this.inProgress$ = this.store.select(selectors.inProgress)

  }

  onSearchTextChanged(searchValue: string): void {

    this.store.dispatch(characterActions.search({ searchValue }));

  }

  onScroll(): void {

    this.store.dispatch(characterActions.loadMore());

  }

}

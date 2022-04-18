import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfCharactersComponent } from './containers/list-of-characters/list-of-characters.component';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component';
import { ThumbnailModule } from 'src/app/_shared/components/thumbnail';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { charactersReducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './store/effects';
import { CharactersService } from 'src/app/_core/services/characters.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
  {
    path: '**',
    component: ListOfCharactersComponent
  }
];

@NgModule({
  declarations: [
    ListOfCharactersComponent,
    CharacterListItemComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ThumbnailModule,
    StoreModule.forFeature('characters', charactersReducer),
    EffectsModule.forFeature([CharactersEffects]),
    InfiniteScrollModule
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersModule { }

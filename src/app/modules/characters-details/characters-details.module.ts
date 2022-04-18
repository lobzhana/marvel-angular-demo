import { CommonModule } from '@angular/common';
import { DetailsOfCharacterComponent } from './containers/details-of-character/details-of-character.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThumbnailModule } from 'src/app/_shared/components/thumbnail';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { characterDetailsReducer } from './store/reducer';
import { CharacterDetailsEffects } from './store/effects';
import { CharacterDetailsService } from 'src/app/_core/services/character-details.service';
import { ScrollContainerModule } from 'src/app/_shared/components/scroll-container';
import { ListItemComponent } from './components/list-item/list-item.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsOfCharacterComponent
  }
];


@NgModule({
  declarations: [
    DetailsOfCharacterComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('character-details', characterDetailsReducer),
    EffectsModule.forFeature([CharacterDetailsEffects]),
    ThumbnailModule,
    ScrollContainerModule
  ],
  providers: [
    CharacterDetailsService
  ]
})
export class CharactersDetailsModule { }

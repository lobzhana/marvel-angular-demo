import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'character-details/:id',
    loadChildren: () => import('./modules/characters-details/characters-details.module').then(m => m.CharactersDetailsModule)
  },
  {
    path: '**',
    redirectTo: '/characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

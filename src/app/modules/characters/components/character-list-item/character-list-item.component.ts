import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/_core/models/character.model';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterListItemComponent {

  @Input() character?: CharacterModel;


}

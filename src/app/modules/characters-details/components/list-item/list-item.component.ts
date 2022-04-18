import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ThumbnailModel } from 'src/app/_core/models/thumbnail.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

  @Input() item?: { id: number, name: string; thumbnail: ThumbnailModel }


}

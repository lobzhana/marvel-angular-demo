import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThumbnailModel } from 'src/app/_core/models/thumbnail.model';
import { ThumbnailSize } from './thumbnail-size';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailComponent implements OnChanges {

  @Input() thumbnail?: ThumbnailModel;
  @Input() size: ThumbnailSize = 'portrait_uncanny';

  imageUrl: string = '';

  ngOnChanges(): void {
    this.imageUrl = this.formatImgUrl(this.thumbnail);
  }

  private formatImgUrl(thumbnail?: ThumbnailModel) {

    if (!!this.thumbnail?.extension && !!this.thumbnail?.path) {
      return `${thumbnail?.path}/${this.size}.${thumbnail?.extension}`
    }

    return '';
  }
}

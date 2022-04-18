import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './thumbnail.component';

@NgModule({
  declarations: [
    ThumbnailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThumbnailComponent
  ]
})
export class ThumbnailModule { }

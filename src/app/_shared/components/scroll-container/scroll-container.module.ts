import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalScrollContainerComponent } from './horizontal-scroll-container/horizontal-scroll-container.component';



@NgModule({
  declarations: [
    HorizontalScrollContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalScrollContainerComponent
  ]
})
export class ScrollContainerModule { }

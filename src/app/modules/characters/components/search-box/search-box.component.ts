import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements AfterViewInit, OnDestroy {

  private eventSubscribtion?: Subscription;
  @ViewChild('searchField') searchField: ElementRef | undefined;

  @Output() onTextChanged = new EventEmitter<string>();

  ngAfterViewInit(): void {

    this.eventSubscribtion = fromEvent(this.searchField?.nativeElement, 'input')
      .pipe(debounceTime(800))
      .subscribe(() => {

        this.onTextChanged.emit(this.searchField?.nativeElement.value);

      });
  }


  ngOnDestroy(): void {
    if (this.eventSubscribtion) {
      this.eventSubscribtion.unsubscribe();
    }
  }

}

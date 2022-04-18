import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalScrollContainerComponent } from './horizontal-scroll-container.component';

describe('HorizontalScrollContainerComponent', () => {
  let component: HorizontalScrollContainerComponent;
  let fixture: ComponentFixture<HorizontalScrollContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalScrollContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalScrollContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfCharacterComponent } from './details-of-character.component';

describe('DetailsOfCharacterComponent', () => {
  let component: DetailsOfCharacterComponent;
  let fixture: ComponentFixture<DetailsOfCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

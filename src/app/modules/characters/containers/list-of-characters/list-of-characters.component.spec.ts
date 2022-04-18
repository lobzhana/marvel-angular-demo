import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCharactersComponent } from './list-of-characters.component';

describe('ListOfCharactersComponent', () => {
  let component: ListOfCharactersComponent;
  let fixture: ComponentFixture<ListOfCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCRUDComponent } from './movies-crud.component';

describe('MoviesCRUDComponent', () => {
  let component: MoviesCRUDComponent;
  let fixture: ComponentFixture<MoviesCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSecondBarComponent } from './top-second-bar.component';

describe('TopSecondBarComponent', () => {
  let component: TopSecondBarComponent;
  let fixture: ComponentFixture<TopSecondBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSecondBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSecondBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNoticePopUpComponent } from './error-notice-pop-up.component';

describe('ErrorNoticePopUpComponent', () => {
  let component: ErrorNoticePopUpComponent;
  let fixture: ComponentFixture<ErrorNoticePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNoticePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNoticePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRequestPeopleListComponent } from './test-request-people-list.component';

describe('TestRequestPeopleListComponent', () => {
  let component: TestRequestPeopleListComponent;
  let fixture: ComponentFixture<TestRequestPeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRequestPeopleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRequestPeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

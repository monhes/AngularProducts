import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRequestGetComponent } from './test-request-get/test-request-get.component';
import { TestRequestPeopleListComponent } from './test-request-people-list/test-request-people-list.component';



@NgModule({
  declarations: [
    TestRequestGetComponent,
    TestRequestPeopleListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TestRequestGetComponent,
    TestRequestPeopleListComponent
  ]
})
export class TestRequestModule { }

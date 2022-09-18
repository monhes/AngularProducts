import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-error-notice-pop-up',
  templateUrl: './error-notice-pop-up.component.html',
  styleUrls: ['./error-notice-pop-up.component.css']
})
export class ErrorNoticePopUpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any) { }

  ngOnInit(): void { 
  }

}

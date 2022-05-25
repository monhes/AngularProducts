import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booklist } from './bookAttributes';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.css']
})
export class TestRequestGetComponent implements OnInit {

  Booklist: Booklist[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   /* https://anapioficeandfire.com/api/characters*/
    this.http.get<Booklist[]>("").subscribe(response => {console.log('response',response); this.Booklist = response})
  }

}

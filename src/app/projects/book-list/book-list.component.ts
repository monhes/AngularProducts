import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booklist } from 'src/app/test-request/test-request-get/bookAttributes';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  Booklist: Booklist[] = [];
  PickedUpBook:  Booklist[] = [];
  Findaliases: string = "";
  searchText:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     
    this.http.get<any[]>("https://anapioficeandfire.com/api/characters").subscribe(response => {console.log('response',response); this.Booklist = response})
  }

  
  loadBook(event:any){
    
    const input: HTMLInputElement = event.target;
    let pick:number = 0;
    //clear list when no search input
    this.PickedUpBook.forEach((elemnt,i)=>{
      this.PickedUpBook.splice(i) 
      i++;
    })
    //put object into variable when string search is matched
    this.Booklist.forEach((element,i=0) => {
        if(element.aliases.toString().toLocaleLowerCase().search(input.value.toLocaleLowerCase()) != -1 && input.value != ""){
          this.PickedUpBook[pick] = this.Booklist[i];
          pick++;
        }
        i++;
     });  
    }

}

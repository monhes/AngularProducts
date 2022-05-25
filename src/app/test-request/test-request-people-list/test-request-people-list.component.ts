import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/app/services/signal-r.service';
import { PeopleList } from './peopleAttributes';

@Component({
  selector: 'app-test-request-people-list',
  templateUrl: './test-request-people-list.component.html',
  styleUrls: ['./test-request-people-list.component.css']
})
export class TestRequestPeopleListComponent implements OnInit {

  PeopleList: PeopleList[] = [];
  constructor(public signalRService: SignalRService, private http: HttpClient) { }

  ngOnInit(): void {
    //https://monhes.github.io/PeopleListAPI/PeopleList.json
    this.http.get<PeopleList[]>("").subscribe(response => {console.log('response',response);this.PeopleList = response})
    //this.signalRService.startConection();
    //this.signalRService.addTransferDataListener();
    //this.startHttpRequest();
  
  }
  private startHttpRequest = () => {
    //this.http.get('https://localhost:7263/api/chart').subscribe(res => console.log(res))
  }
  noticeServer(){
    console.log("client clicked");
    //this.signalRService.hubConnection.send("ReceiveClicked", "message from client");
  }
}

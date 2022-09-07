import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { from } from 'rxjs';
import { UserMessage } from '../projects/chat-page/user-message';
import { ChartModel } from './chartmodel.model'; 
import { DotnetSignalR } from './local-path.service';
import {LocalPathService} from './local-path.service';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public serUserMessage: UserMessage[] = [];
  public data: ChartModel[] = [];
  public setMessage: any;
  constructor(private urlpath:LocalPathService){}

  public hubConnection:signalR.HubConnection = new signalR.HubConnectionBuilder()
  .withUrl(this.urlpath.AzurePathSignalR)
    .build();
   
  public startConection =()=>{
    console.log('start connection')
     this.hubConnection
    .start()
    .then(()=>console.log('connection Started'))
    .catch((err)=>console.log('Err '+ err))
  }
  public addTransferDataListener = () =>{
    this.hubConnection.on('transferchartdata',(data)=>{
      this.data = data
      console.log(data);
    })
  } 
}

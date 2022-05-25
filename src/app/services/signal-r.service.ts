import { Injectable } from '@angular/core';
//import * as signalR from '@microsoft/signalr';
import { ChartModel } from './chartmodel.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
public data: ChartModel[] = [];
  /*hubConnection:signalR.HubConnection = new signalR.HubConnectionBuilder()
  .withUrl('https://localhost:7263/chart')
  .build();
   
  public startConection =()=>{
    console.log('start connection')
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:7263/chart')
    .build()
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
  }*/
  constructor() {}
}

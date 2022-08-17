import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalPathService {

  constructor() { }
  AzurePath:string = "https://thudentrylevel.azurewebsites.net/"
  AzurePathSignalR:string = "https://thudentrylevel.azurewebsites.net/chart"
  LocalPath:string = "https://localhost:7263/"
  LocalPathSignalR:string = "https://localhost:7263/chart"

}

export const DotnetPath:string = "https://localhost:7263/" // local https://localhost:7263/
export const DotnetSignalR:string = "https://localhost:7263/chart" //chatpage component https://thudentrylevel.azurewebsites.net/chart
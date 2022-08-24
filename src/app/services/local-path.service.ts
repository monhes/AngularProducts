import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalPathService {

  constructor() { }
  public AzurePath:string = "https://thudentrylevel.azurewebsites.net/"
  public AzurePathSignalR:string = "https://thudentrylevel.azurewebsites.net/chart"
  public LocalPath:string = "https://localhost:7263/"
  public LocalPathSignalR:string = "https://localhost:7263/chart"

}

export const DotnetPath:string = "https://localhost:7263/" // local https://localhost:7263/
export const DotnetSignalR:string = "https://localhost:7263/chart" //chatpage component https://thudentrylevel.azurewebsites.net/chart
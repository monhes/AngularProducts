import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable, of, tap } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  responseCache = new Map();
  constructor(public loadService:LoaderService) {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   const cache = this.responseCache.get(request.urlWithParams);
  //   if(!this.canCache(request)){
  //     return next.handle(request);
  //   }
  //   if(cache){
  //     return of(cache)
  //   }

  //   return next.handle(request).pipe(tap(response=>{
  //     this.responseCache.set(request.urlWithParams,response);
  //   }));
  // }
  intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    this.loadService.isLoading.next(true); 
    return next.handle(req).pipe(
      finalize(
        ()=>{
          this.loadService.isLoading.next(false);
        }
      )
    )
  }

  canCache(request:HttpRequest<unknown>):boolean{
    return request.urlWithParams.includes('https://anapioficeandfire.com/api/characters');
  }
}

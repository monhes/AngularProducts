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
  MoviesreponseCache = new Map();
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
    const MoviesCache =this.MoviesreponseCache.get(req.urlWithParams);
    // if(MoviesCache  ){
    //   console.warn("cache")
    //   console.log(MoviesCache)
    //   console.log(of(MoviesCache))
    //   return of(MoviesCache);
    // }//todo find best condition
    // else if(!MoviesCache || MoviesCache.type == 0){
    //   console.warn("req cache")
    //   return next.handle(req).pipe(tap(response=>{
    //     this.MoviesreponseCache.set(req.urlWithParams,response);
    //   }));
    // }
      console.warn("out req chache")
      return next.handle(req).pipe(tap(response=>{
      this.MoviesreponseCache.set(req.urlWithParams,response);
    }));
  }//todo fix movies caching

  canCache(request:HttpRequest<unknown>):boolean{
    return request.urlWithParams.includes('https://anapioficeandfire.com/api/characters');
  }
  MoviesCaching(request:HttpRequest<unknown>):boolean{
    return request.urlWithParams.includes('https://localhost:7263/api/moviesapi')
  }
}

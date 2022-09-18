import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(public loadService:LoaderService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadService.isLoading.next(true); 
    return next.handle(req).pipe(
      finalize(
        ()=>{
          this.loadService.isLoading.next(false);
        }
      )
    )
  }
}

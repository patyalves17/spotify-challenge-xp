import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';


@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) { }

  /**
   *
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @return {Observable}     Request
   */

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {


    const authenticateRequest = request.clone(this.setHeaders(request));
    return next.handle(authenticateRequest);
  }

  setHeaders(request) {
    const headerSettings: { [name: string]: string | string[]; } = {};

    if (this.storageService.hasSessionStorage('access_token')) {
      const tokenType = this.storageService.getSessionStorage('token_type');
      const accessToken = this.storageService.getSessionStorage('access_token');
      headerSettings['Authorization'] = `${tokenType} ${accessToken}`;
    } else {
      return headerSettings;
    }


    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }

    const newHeader = new HttpHeaders(headerSettings);

    return { headers: newHeader };
  }


}

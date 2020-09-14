import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public responseCache = new Map();

  constructor(
    private http: HttpClient, private storageService: StorageService) {
  }

  getSearch(search: string) {
    const url = `https://api.spotify.com/v1/search?q=${search}&type=album`;
    const searchFromCache = this.responseCache.get(url);

    if (searchFromCache) {
      return of(searchFromCache);
    }

    const response = this.http.get<any>(url);

    response.subscribe(result => {

      this.responseCache.set(url, {
        albums: result['albums']['items'],
        filter: search
      })

    });
    return response.pipe(map(result => {
      return {
        albums: result['albums']['items'],
        filter: search
      }
    }));

  }

  getAlbumDetails(id: string) {
    return this.http.get(`https://api.spotify.com/v1/albums/${id}`)
      .pipe(
        map(result => {
          console.log(result);
          this.storageService.setHistoryLocalStorage('history', result);
          return result;
        }),
        catchError((errorResponse: HttpErrorResponse) => of(errorResponse))
      );
  }


}

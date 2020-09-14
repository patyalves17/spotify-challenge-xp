import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient) {
  }

  getSearch(search: string) {
    return this.http.get(`https://api.spotify.com/v1/search?q=${search}&type=album`)
      .pipe(map(result => {
        return {
          albums: result['albums']['items'],
          filter: search
        }
      }),
        catchError((errorResponse: HttpErrorResponse) => of(errorResponse))
      )
  }

  getAlbumDetails(id: string) {
    return this.http.get(`https://api.spotify.com/v1/albums/${id}`)
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => of(errorResponse))
      );
  }


}

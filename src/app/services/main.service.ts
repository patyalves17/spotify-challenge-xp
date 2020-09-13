import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  getSearch(search: string) {
    return this.http.get(`https://api.spotify.com/v1/search?q=${search}&type=album`)
      .pipe(map(result => result['albums']['items']));
  }

  getAlbumDetails(id: string) {
    return this.http.get(`https://api.spotify.com/v1/albums/${id}`);
  }


}

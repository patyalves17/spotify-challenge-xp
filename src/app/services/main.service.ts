import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getSearch(search: string) {

    return this.http.get(`https://api.spotify.com/v1/search?q=${search}&type=album`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.userService.getToken('access_token')}`
      }
    });
  }


}

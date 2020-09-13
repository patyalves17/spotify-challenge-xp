import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getAccessToken(code: string) {

    const payload = new HttpParams()
      .set('code', code)
      .set('redirect_uri', 'http://localhost:4200')
      .set('grant_type', 'authorization_code');


    return this.http.post('https://accounts.spotify.com/api/token',
      payload,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + window.btoa((environment.spotify.clientID + ':' + environment.spotify.clientSecret))
        }
      },

    ).pipe(tap(res => {
      this.userService.storage('access_token', res['access_token']);
      this.userService.storage('refresh_token', res['refresh_token']);
      this.userService.storage('scope', res['scope']);
      // sessionStorage.setItem('token', JSON.stringify(res['access_token']) );
      console.log(res);
      return res;
    }));
  }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService) {
  }

  getAccessToken(code: string) {

    let codeVerifier = this.storageService.getSessionStorage('code_verifier');

    const payload = new HttpParams()
      .set('client_id', environment.spotify.clientID)
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', environment.spotify.redirectUri)
      .set('code_verifier', codeVerifier);

    return this.http.post('https://accounts.spotify.com/api/token',
      payload,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },

    ).pipe(tap(res => {
      this.storageService.saveCredentialsSessionStorage(res);
      return res;
    }));
  }

  getRefreshToken() {

    const payload = new HttpParams()
      .set('refresh_token', this.storageService.getSessionStorage('refresh_token'))
      .set('grant_type', 'refresh_token');

    return this.http.post('https://accounts.spotify.com/api/token',
      payload,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + window.btoa((environment.spotify.clientID + ':' + environment.spotify.clientSecret))
        }
      },

    ).pipe(tap(res => {
      this.storageService.saveCredentialsSessionStorage(res);
      return res;
    }));
  }

  isAuthenticated(): boolean {
    return this.storageService.hasSessionStorage('access_token');
  }


}

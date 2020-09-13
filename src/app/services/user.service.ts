import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  storage(key, token: string) {
    window.sessionStorage.setItem(key, JSON.stringify(token));
  }

  getToken(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  clearToken(key) {
    sessionStorage.removeItem(key);
  }

  hasToken() {
    return !!this.getToken('access_token');
  }
}

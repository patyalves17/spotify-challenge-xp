import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveCredentialsSessionStorage(credentials): void {
    for (const credentialType in credentials) {
      this.setSessionStorage(credentialType, credentials[credentialType]);
    }
  }

  public setSessionStorage(key: string, value: any): void {
    sessionStorage.setItem(key, value);
  }

  public getSessionStorage(key: string): string {
    return sessionStorage.getItem(key);
  }

  public removeSessionStorage(key) {
    sessionStorage.removeItem(key);
  }

  public clearSessionStorage() {
    sessionStorage.clear();
  }

  public hasSessionStorage(key: string): boolean {
    return sessionStorage.hasOwnProperty(key);
  }

  public setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public getLocalStorage(key: string): string {
    return localStorage.getItem(key);
  }

  public removeLocalStorage(key) {
    localStorage.removeItem(key);
  }

  public hasLocalStorage(key: string): boolean {
    return localStorage.hasOwnProperty(key);
  }

  public setHistoryLocalStorage(key: string, value: any) {
    let history = this.hasLocalStorage(key) ? JSON.parse(this.getLocalStorage(key)) : [];

    let has = history.findIndex(his => { return his.id == value.id })

    if (has != -1) {
      history.splice(has, 1);
    }

    history.unshift(value);

    this.setLocalStorage(key, JSON.stringify(history.slice(0, 10)));
  }
}

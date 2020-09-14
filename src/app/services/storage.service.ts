import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseService } from './base.service';

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
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { environment } from './../../environments/environment';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  code: string = '';

  constructor(
    private authService: AuthService,
    private route: Router,
    private router: ActivatedRoute,
    private storageService: StorageService) { }

  ngOnInit(): void {

    if (this.authService.isAuthenticated()) {
      this.route.navigate(['albums']);
    }

    this.router.queryParams.subscribe(params => {
      this.code = params['code'];
      if (this.code) {
        this.authService.getAccessToken(this.code).subscribe(token => {
          this.route.navigate(['albums']);
        }, error => {
          console.error(error);
        });
      }
    });

  }

  async getToken() {

    const random = this.generateRandomString(50);
    const codeChallenge = (await this.pkce_challenge_from_verifier(random)).toString();

    this.storageService.setSessionStorage('code_verifier', random);

    window.location.href = `https://accounts.spotify.com/authorize?`
      + `&client_id=${encodeURIComponent(environment.spotify.clientID)}`
      + `&response_type=${encodeURIComponent('code')}`
      + `&redirect_uri=${encodeURIComponent(environment.spotify.redirectUri)}`
      + `&code_challenge_method	=${encodeURIComponent('S256')}`
      + `&code_challenge=${encodeURIComponent(codeChallenge)}`
      + `&state= ${encodeURIComponent(this.generateRandomString(16))}`
      + `&scope=${encodeURIComponent('user-read-private user-read-email')}`;
  }

  async pkce_challenge_from_verifier(v) {
    let hashed = await this.sha256(v);
    let base64encoded = this.base64urlencode(hashed);
    return base64encoded;
  }

  generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  async sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);

    return window.crypto.subtle.digest('SHA-256', data);
  }

  base64urlencode(a) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(a)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
}

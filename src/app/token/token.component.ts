import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  code: string = '';

  constructor(private authService: AuthService, private route: Router, private router: ActivatedRoute,) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.code = params['code'];
      if (this.code) {
        this.authService.getAccessToken(this.code).subscribe(token => {
          this.route.navigate(['albums']);
        }, error => {
          console.log(error);
        });
      }
    });

  }

  getToken() {

    window.location.href = `https://accounts.spotify.com/authorize?`
      + `response_type=${encodeURIComponent('code')}`
      + `&client_id=${encodeURIComponent(environment.spotify.clientID)}`
      + `&scope=${encodeURIComponent('user-read-private user-read-email user-read-playback-state')}`
      + `&redirect_uri=${encodeURIComponent('http://localhost:4200')}`
      + `&state: ${encodeURIComponent(this.generateRandomString(16))}`;
  }

  generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

}

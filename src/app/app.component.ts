import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet> `
})
export class AppComponent implements OnInit {
  title = 'spotify-challenge-xp';
  pushSubs = null;

  constructor(readonly swPush: SwPush, private mainService: MainService) { }
  ngOnInit(): void {
    this.subscribeToPush();

    this.swPush.notificationClicks.subscribe(
      (notpayload) => {
        console.log(notpayload);
      });

  }


  private async subscribeToPush() {
    try {

      const sub = await this.swPush.requestSubscription({
        serverPublicKey: 'BBT--cK2cCCrs7QfeCcp9JKNbpEaSgNOAQz1UfM7LADhVVq6gi6DqquWEfbw0vnnqK3tPA-tdoAzuD2k0sp6ukI',
      }).then(sub => {

        console.log('sub ', sub);
        console.log('pushSubs ', this.pushSubs);

        if (this.pushSubs == null) {
          this.pushSubs = sub;
          this.mainService.postSubscribe(sub).subscribe(resp => {
            console.log(resp);
          });
        }
      });

      // TODO: Send to server.
    } catch (err) {
      console.error('Could not subscribe due to:', err);
    }
  }


}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TokenRoutingModule } from './token/token-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { BaseInterceptor } from './services/base.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { spotifyChallengerReducer } from './store/spotifyChallenger.reducer';
import { SpotifyChallengerEffect } from './store/spotifyChallenger.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TokenRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('spotify-challenger', spotifyChallengerReducer),
    EffectsModule.forRoot([SpotifyChallengerEffect]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

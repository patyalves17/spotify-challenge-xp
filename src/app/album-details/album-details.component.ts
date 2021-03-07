import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SpotifyChallengerFacade } from '../store/spotifyChallengerFacade';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit, OnDestroy {
  album = null;
  isPlaying = false
  currentTrack = {
    name: '',
    duration_ms: 0
  };

  public albumDetails$: Observable<any>;
  public audio: any;

  constructor(private router: Router, private facade: SpotifyChallengerFacade) {
    this.audio = new Audio();
    this.albumDetails$ = this.facade.getAlbumDetails();
  }


  ngOnInit(): void {

    this.albumDetails$.subscribe(result => {
      if (!result.loading && !result.album) {
        this.router.navigate(['albums']);
      }
      this.album = result.album;
    });
  }

  ngOnDestroy(): void {
    this.audio.pause()
  }

  playTrack(track) {
    this.currentTrack = track
    this.isPlaying = true
    this.audio.src = track.preview_url
    this.audio.load()
    this.audio.play()
  }

  play() {
    this.audio.play()
    this.isPlaying = true
  }

  pause() {
    this.audio.pause()
    this.isPlaying = false
  }


  msToTime(milliseconds) {
    //Get hours from milliseconds
    let hours = milliseconds / (1000 * 60 * 60);
    let absoluteHours = Math.floor(hours);
    let h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    //Get remainder from hours and convert to minutes
    let minutes = (hours - absoluteHours) * 60;
    let absoluteMinutes = Math.floor(minutes);
    let m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    let seconds = (minutes - absoluteMinutes) * 60;
    let absoluteSeconds = Math.floor(seconds);
    let s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    return h == "00" ? m + ':' + s : h + ':' + m + ':' + s;
  }


}


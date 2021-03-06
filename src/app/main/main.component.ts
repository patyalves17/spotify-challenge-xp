import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { SpotifyChallengerFacade } from '../store/spotifyChallengerFacade';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  albums = [];
  filter = '';
  history = [];

  public albums$: Observable<any>;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private facade: SpotifyChallengerFacade
  ) {
    this.albums$ = this.facade.albums$;
  }

  ngOnInit(): void {
    this.history = JSON.parse(this.storageService.getLocalStorage('history'));
    this.albums$.subscribe(albums => {
      if (albums && albums.filter && albums.list) {
        this.filter = albums.filter;
        this.albums = albums.list;
      }

    });
  }

  doSearch($event) {
    this.filter = $event;
    if (this.filter) {
      this.facade.albumsRequest(this.filter);
    }
  }

  showAlbumDetails(item) {
    this.storageService.setHistoryLocalStorage('history', item);
    this.facade.albumDetailsRequest(item.id);
    this.router.navigate(['albums', item.artists[0].name]);
  }

}

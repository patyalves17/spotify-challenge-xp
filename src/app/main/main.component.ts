import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AlbumsRequest } from '../store/albums-list/albums-list.actions';
import * as fromApp from '../store/app.reducer';
import { getAlbums } from '../store/app.selectors';
import { AlbumDetailsRequest } from '../store/album-details/album-details.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  albums = [];
  filter = '';

  public albums$: Observable<any> = this.store.select(getAlbums);

  constructor(
    private router: Router,
    private store: Store<fromApp.AppStateInterface>
  ) { }

  ngOnInit(): void {
    this.albums$.subscribe(albums => {
      this.filter = albums.filter;
      this.albums = albums.list;
    });
  }


  doSearch($event) {
    this.filter = $event;
    this.store.dispatch(new AlbumsRequest(this.filter));
  }

  showAlbumDetails(item) {
    console.log(item);
    this.store.dispatch(new AlbumDetailsRequest(item.id));
    this.router.navigate(['albums', item.artists[0].name]);
  }

}

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';

import { StorageService } from '../services/storage.service';
import { TestStore } from '../store/test-store';
import { MainComponent } from './main.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { SearchComponent } from './components/search/search.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { SharedModule } from '../shared/shared.module';
import { AlbumsRequest } from '../store/albums-list/albums-list.actions';
import { AlbumDetailsRequest } from '../store/album-details/album-details.actions';
import { Router } from '@angular/router';

fdescribe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  let mockStore: MockStore;
  const initialState = {
    albums: {
      list: [
        {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/4BxCuXFJrSWGi1KHcVqaU4'
              },
              href: 'https://api.spotify.com/v1/artists/4BxCuXFJrSWGi1KHcVqaU4',
              id: '4BxCuXFJrSWGi1KHcVqaU4',
              name: 'Kodaline',
              type: 'artist',
              uri: 'spotify:artist:4BxCuXFJrSWGi1KHcVqaU4'
            }
          ],
          available_markets: [
            'AD',
            'AE',
            'AL',
            'AR',
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/1ttGpGzOEi6JDDOHO4qD1y'
          },
          href: 'https://api.spotify.com/v1/albums/1ttGpGzOEi6JDDOHO4qD1y',
          id: '1ttGpGzOEi6JDDOHO4qD1y',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2733e42854096da9a3b1ca901c9',
              width: 640
            }
          ],
          name: 'In A Perfect World (Expanded Edition)',
          release_date: '2013-06-17',
          release_date_precision: 'day',
          total_tracks: 15,
          type: 'album',
          uri: 'spotify:album:1ttGpGzOEi6JDDOHO4qD1y'
        },
        {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/4BxCuXFJrSWGi1KHcVqaU4'
              },
              href: 'https://api.spotify.com/v1/artists/4BxCuXFJrSWGi1KHcVqaU4',
              id: '4BxCuXFJrSWGi1KHcVqaU4',
              name: 'Kodaline',
              type: 'artist',
              uri: 'spotify:artist:4BxCuXFJrSWGi1KHcVqaU4'
            }
          ],
          available_markets: [
            'AD',
            'AE',
            'AL'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/1ITjhViDumL9llxAJYdKiC'
          },
          href: 'https://api.spotify.com/v1/albums/1ITjhViDumL9llxAJYdKiC',
          id: '1ITjhViDumL9llxAJYdKiC',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2732112db8aa9dabc6cdd9e14d0',
              width: 640
            }
          ],
          name: 'Politics of Living',
          release_date: '2018-09-28',
          release_date_precision: 'day',
          total_tracks: 12,
          type: 'album',
          uri: 'spotify:album:1ITjhViDumL9llxAJYdKiC'
        }
      ],
      filter: 'kodaline',
      error: null,
      loading: false,
      loaded: true
    },
    albumDetails: {
      album: null,
      error: null,
      loading: false,
      loaded: false
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        MainComponent,
        SearchComponent,
        AlbumsListComponent
      ],
      providers: [
        StorageService,
        { provide: Store, useClass: TestStore },
        provideMockStore({ initialState }),
        { provide: Router, useValue: router }
      ]
    })
      .compileComponents();

    mockStore = TestBed.get(Store);
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do something', () => {

    const expected = cold('a', { name: 'In A Perfect World (Expanded Edition)' });

    component.ngOnInit();
    expect(component.albums[0].name).toBe('In A Perfect World (Expanded Edition)');
  });


  it('should dispatch AlbumsRequest action', () => {
    spyOn(mockStore, 'dispatch').and.callThrough();

    component.doSearch('kodaline');

    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
    expect(mockStore.dispatch).toHaveBeenCalledWith(new AlbumsRequest('kodaline'));
    expect(component.filter).toBe('kodaline');
  });


  it('should show album details', () => {
    spyOn(mockStore, 'dispatch').and.callThrough();

    let item = component.albums[0]

    component.showAlbumDetails(item);

    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
    expect(mockStore.dispatch).toHaveBeenCalledWith(new AlbumDetailsRequest(item.id));
    expect(router.navigate).toHaveBeenCalledWith(['albums', item.artists[0].name]);
  });

});

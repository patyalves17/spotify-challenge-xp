import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlbumDetailsComponent } from './album-details.component';
import { SpotifyChallengerFacade } from '../store/spotifyChallengerFacade';
import { of } from 'rxjs';

fdescribe('AlbumDetailsComponent', () => {

    const routerSpy = {
        navigate: jasmine.createSpy('navigate')
    }

    const facadeSpy = jasmine.createSpyObj('SpotifyChallengerFacade', ['getAlbumDetails']);


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Router,
                    useValue: routerSpy
                },
                {
                    provide: SpotifyChallengerFacade,
                    useValue: facadeSpy
                },
            ],
            declarations: [
                AlbumDetailsComponent
            ],
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(AlbumDetailsComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should navigate to albuns', async () => {
        facadeSpy.getAlbumDetails.and.returnValue(
            of([])
        );

        const fixture = TestBed.createComponent(AlbumDetailsComponent);
        fixture.detectChanges();
        expect(routerSpy.navigate).toHaveBeenCalledWith(['albums']);
    });

    it('should show album details', async () => {


        let detail = {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                        },
                        "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                        "id": "3qm84nBOXUEQ2vnTfUTTFC",
                        "name": "Guns N' Roses",
                        "type": "artist",
                        "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                    }
                ],
                "copyrights": [
                    {
                        "text": "© 1991 UMG Recordings, Inc.",
                        "type": "C"
                    },
                    {
                        "text": "A Geffen Records Release; ℗ 1991 UMG Recordings, Inc.",
                        "type": "P"
                    }
                ],
                "external_ids": {
                    "upc": "00602567756842"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/00eiw4KOJZ7eC3NBEpmH4C"
                },
                "genres": [],
                "href": "https://api.spotify.com/v1/albums/00eiw4KOJZ7eC3NBEpmH4C",
                "id": "00eiw4KOJZ7eC3NBEpmH4C",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0292d21aef6c0d288cc4c05973",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485192d21aef6c0d288cc4c05973",
                        "width": 64
                    }
                ],
                "label": "Geffen",
                "name": "Use Your Illusion II",
                "popularity": 78,
                "release_date": "1991-09-18",
                "release_date_precision": "day",
                "total_tracks": 14,
                "tracks": {
                    "href": "https://api.spotify.com/v1/albums/00eiw4KOJZ7eC3NBEpmH4C/tracks?offset=0&limit=50",
                    "items": [
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 462093,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/6i4Qi1mJxXjqNIL9HfJhRs"
                            },
                            "href": "https://api.spotify.com/v1/tracks/6i4Qi1mJxXjqNIL9HfJhRs",
                            "id": "6i4Qi1mJxXjqNIL9HfJhRs",
                            "is_local": false,
                            "name": "Civil War",
                            "preview_url": null,
                            "track_number": 1,
                            "type": "track",
                            "uri": "spotify:track:6i4Qi1mJxXjqNIL9HfJhRs"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 261373,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/7xki0BmuOllyquWqjhETyr"
                            },
                            "href": "https://api.spotify.com/v1/tracks/7xki0BmuOllyquWqjhETyr",
                            "id": "7xki0BmuOllyquWqjhETyr",
                            "is_local": false,
                            "name": "14 Years",
                            "preview_url": null,
                            "track_number": 2,
                            "type": "track",
                            "uri": "spotify:track:7xki0BmuOllyquWqjhETyr"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 196226,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/11VGhd5i7deLL0YB0ayicY"
                            },
                            "href": "https://api.spotify.com/v1/tracks/11VGhd5i7deLL0YB0ayicY",
                            "id": "11VGhd5i7deLL0YB0ayicY",
                            "is_local": false,
                            "name": "Yesterdays",
                            "preview_url": null,
                            "track_number": 3,
                            "type": "track",
                            "uri": "spotify:track:11VGhd5i7deLL0YB0ayicY"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 336000,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/4JiEyzf0Md7KEFFGWDDdCr"
                            },
                            "href": "https://api.spotify.com/v1/tracks/4JiEyzf0Md7KEFFGWDDdCr",
                            "id": "4JiEyzf0Md7KEFFGWDDdCr",
                            "is_local": false,
                            "name": "Knockin' On Heaven's Door",
                            "preview_url": null,
                            "track_number": 4,
                            "type": "track",
                            "uri": "spotify:track:4JiEyzf0Md7KEFFGWDDdCr"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 341306,
                            "explicit": true,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/4BIMNBkz3OgRgARIMYh7QW"
                            },
                            "href": "https://api.spotify.com/v1/tracks/4BIMNBkz3OgRgARIMYh7QW",
                            "id": "4BIMNBkz3OgRgARIMYh7QW",
                            "is_local": false,
                            "name": "Get In The Ring",
                            "preview_url": null,
                            "track_number": 5,
                            "type": "track",
                            "uri": "spotify:track:4BIMNBkz3OgRgARIMYh7QW"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 203000,
                            "explicit": true,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/3VGEx0xUC5fHpcw3VshMWE"
                            },
                            "href": "https://api.spotify.com/v1/tracks/3VGEx0xUC5fHpcw3VshMWE",
                            "id": "3VGEx0xUC5fHpcw3VshMWE",
                            "is_local": false,
                            "name": "Shotgun Blues",
                            "preview_url": null,
                            "track_number": 6,
                            "type": "track",
                            "uri": "spotify:track:3VGEx0xUC5fHpcw3VshMWE"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 424493,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/77bCgbwirSDVeBGHxg00A7"
                            },
                            "href": "https://api.spotify.com/v1/tracks/77bCgbwirSDVeBGHxg00A7",
                            "id": "77bCgbwirSDVeBGHxg00A7",
                            "is_local": false,
                            "name": "Breakdown",
                            "preview_url": null,
                            "track_number": 7,
                            "type": "track",
                            "uri": "spotify:track:77bCgbwirSDVeBGHxg00A7"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 287906,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/2hAt6y582UsTcwvCKTcTMs"
                            },
                            "href": "https://api.spotify.com/v1/tracks/2hAt6y582UsTcwvCKTcTMs",
                            "id": "2hAt6y582UsTcwvCKTcTMs",
                            "is_local": false,
                            "name": "Pretty Tied Up (The Perils Of Rock N' Roll Decadence)",
                            "preview_url": null,
                            "track_number": 8,
                            "type": "track",
                            "uri": "spotify:track:2hAt6y582UsTcwvCKTcTMs"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 522093,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/2UqzzArv2T0NnHSTIUa13V"
                            },
                            "href": "https://api.spotify.com/v1/tracks/2UqzzArv2T0NnHSTIUa13V",
                            "id": "2UqzzArv2T0NnHSTIUa13V",
                            "is_local": false,
                            "name": "Locomotive (Complicity)",
                            "preview_url": null,
                            "track_number": 9,
                            "type": "track",
                            "uri": "spotify:track:2UqzzArv2T0NnHSTIUa13V"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 246373,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/2lU2VI066HaPGyKTh6ANvI"
                            },
                            "href": "https://api.spotify.com/v1/tracks/2lU2VI066HaPGyKTh6ANvI",
                            "id": "2lU2VI066HaPGyKTh6ANvI",
                            "is_local": false,
                            "name": "So Fine",
                            "preview_url": null,
                            "track_number": 10,
                            "type": "track",
                            "uri": "spotify:track:2lU2VI066HaPGyKTh6ANvI"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 563893,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/3s03nrUInN3NAVjQtmnS0O"
                            },
                            "href": "https://api.spotify.com/v1/tracks/3s03nrUInN3NAVjQtmnS0O",
                            "id": "3s03nrUInN3NAVjQtmnS0O",
                            "is_local": false,
                            "name": "Estranged",
                            "preview_url": null,
                            "track_number": 11,
                            "type": "track",
                            "uri": "spotify:track:3s03nrUInN3NAVjQtmnS0O"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 343640,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/0dlTGl67UFWcKupzkxZYOn"
                            },
                            "href": "https://api.spotify.com/v1/tracks/0dlTGl67UFWcKupzkxZYOn",
                            "id": "0dlTGl67UFWcKupzkxZYOn",
                            "is_local": false,
                            "name": "You Could Be Mine",
                            "preview_url": null,
                            "track_number": 12,
                            "type": "track",
                            "uri": "spotify:track:0dlTGl67UFWcKupzkxZYOn"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 284266,
                            "explicit": false,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/6mAfxuTuRz1FWfriiFf57y"
                            },
                            "href": "https://api.spotify.com/v1/tracks/6mAfxuTuRz1FWfriiFf57y",
                            "id": "6mAfxuTuRz1FWfriiFf57y",
                            "is_local": false,
                            "name": "Don't Cry - Alternate Lyrics",
                            "preview_url": null,
                            "track_number": 13,
                            "type": "track",
                            "uri": "spotify:track:6mAfxuTuRz1FWfriiFf57y"
                        },
                        {
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC",
                                    "id": "3qm84nBOXUEQ2vnTfUTTFC",
                                    "name": "Guns N' Roses",
                                    "type": "artist",
                                    "uri": "spotify:artist:3qm84nBOXUEQ2vnTfUTTFC"
                                }
                            ],
                            "disc_number": 1,
                            "duration_ms": 86426,
                            "explicit": true,
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/4PFvlYJZOh2JwRbEXn93Vc"
                            },
                            "href": "https://api.spotify.com/v1/tracks/4PFvlYJZOh2JwRbEXn93Vc",
                            "id": "4PFvlYJZOh2JwRbEXn93Vc",
                            "is_local": false,
                            "name": "My World",
                            "preview_url": null,
                            "track_number": 14,
                            "type": "track",
                            "uri": "spotify:track:4PFvlYJZOh2JwRbEXn93Vc"
                        }
                    ],
                    "limit": 50,
                    "next": null,
                    "offset": 0,
                    "previous": null,
                    "total": 14
                },
                "type": "album",
                "uri": "spotify:album:00eiw4KOJZ7eC3NBEpmH4C"
            },
            "error": null,
            "loading": false,
            "loaded": true
        };

        facadeSpy.getAlbumDetails.and.returnValue(
            of(detail)
        );

        const fixture = TestBed.createComponent(AlbumDetailsComponent);

        const component = fixture.componentInstance;

        expect(component).toBeTruthy();
        fixture.detectChanges();

        await fixture.whenStable();

        const albumName = fixture.nativeElement.querySelector('p.body.secondary__text.my-2').innerText;

        expect(albumName).toContain('Use Your Illusion II');

        const tracksDivs = document.querySelectorAll('.details__tracks li');

        expect(tracksDivs.length).toEqual(14);
    });

});

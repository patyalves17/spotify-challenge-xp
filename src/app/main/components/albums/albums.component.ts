import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Input() albums: [];
  @Input() filter: string;

  constructor() { }

  ngOnInit(): void {
  }

  showAlbum(item) {
    console.log(item);

  }
}

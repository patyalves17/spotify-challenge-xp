import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  @Input() albums: [];
  @Input() filter: string;
  @Input() titulo: string;
  @Output() showAlbum$ = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  showAlbum(item) {
    this.showAlbum$.emit(item);
  }
}

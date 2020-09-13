import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() album: any;
  @Output() $clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public clicked(album) {
    this.$clicked.emit(album);
  }
}

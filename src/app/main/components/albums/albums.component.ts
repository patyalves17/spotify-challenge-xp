import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Input() albums: [];
  @Input() filter: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showAlbum(item) {
    console.log(item);
    this.router.navigate(['albums', item.artists[0].name]);

  }
}

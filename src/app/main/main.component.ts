import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  albums = [];
  filter: string = '';

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }


  doSearch($event) {
    this.filter = $event;
    this.mainService.getSearch($event).subscribe(res => {
      this.albums = res['albums']['items'];
    });
  }

}

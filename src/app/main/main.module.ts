import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './main.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    AlbumsListComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }

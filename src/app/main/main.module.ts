import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SearchComponent } from './components/search/search.component';
import { MainComponent } from './main.component';
import { AlbumsComponent } from './components/albums/albums.component';



@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    AlbumsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }

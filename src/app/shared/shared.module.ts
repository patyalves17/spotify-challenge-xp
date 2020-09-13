import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';



@NgModule({
  declarations: [
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AlbumCardComponent
  ]
})
export class SharedModule { }

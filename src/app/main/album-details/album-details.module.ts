import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumDetailsComponent } from './album-details.component';
import { AlbumDetailsRoutingModule } from './album-details-routing.module';


@NgModule({
  declarations: [
    AlbumDetailsComponent,
  ],
  imports: [
    CommonModule,
    AlbumDetailsRoutingModule
  ]
})
export class AlbumDetailsModule { }

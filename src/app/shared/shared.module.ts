import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsCarouselComponent } from './groups-carousel/groups-carousel.component';
import { ImgUploaderComponent } from './img-uploader/img-uploader.component';

@NgModule({
  declarations: [
    GroupsCarouselComponent,
    ImgUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GroupsCarouselComponent,
    ImgUploaderComponent
  ]
})
export class SharedModule { }

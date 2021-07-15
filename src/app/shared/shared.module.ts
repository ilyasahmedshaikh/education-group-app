import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsCarouselComponent } from './groups-carousel/groups-carousel.component';

@NgModule({
  declarations: [
    GroupsCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GroupsCarouselComponent
  ]
})
export class SharedModule { }

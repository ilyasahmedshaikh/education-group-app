import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { AddEditActivityComponent } from './add-edit-activity/add-edit-activity.component';
import { ActivityListingComponent } from './activity-listing/activity-listing.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';


@NgModule({
  declarations: [ActivitiesComponent, AddEditActivityComponent, ActivityListingComponent, ActivityDetailsComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { AddEditActivityComponent } from './add-edit-activity/add-edit-activity.component';
import { ActivityListingComponent } from './activity-listing/activity-listing.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';


@NgModule({
  declarations: [ActivitiesComponent, AddEditActivityComponent, ActivityListingComponent, ActivityDetailsComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ActivitiesModule { }

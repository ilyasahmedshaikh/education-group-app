import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesComponent } from './activities.component';
import { ActivityListingComponent } from './activity-listing/activity-listing.component';
import { AddEditActivityComponent } from './add-edit-activity/add-edit-activity.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
    children: [
      {
        path: '',
        component: ActivityListingComponent
      },
      {
        path: 'activity-listing',
        component: ActivityListingComponent
      },
      {
        path: 'add-edit-activity',
        component: AddEditActivityComponent
      },
      {
        path: 'activity-details',
        component: ActivityDetailsComponent
      },
      {
        path: 'event-details',
        component: EventDetailsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }

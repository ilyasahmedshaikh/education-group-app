import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';
import { GroupListingComponent } from './group-listing/group-listing.component';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupDecsriptionComponent } from './group-decsription/group-decsription.component';
import { GroupEventsComponent } from './group-events/group-events.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    children: [
      {
        path: '',
        component: GroupListingComponent
      },
      {
        path: 'group-listing',
        component: GroupListingComponent
      },
      {
        path: 'add-edit-group',
        component: AddEditGroupComponent
      },
      {
        path: 'group-details',
        component: GroupDetailsComponent
      },
      {
        path: 'group-description',
        component: GroupDecsriptionComponent
      },
      {
        path: 'group-events',
        component: GroupEventsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }

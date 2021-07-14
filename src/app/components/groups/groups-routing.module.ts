import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';
import { GroupListingComponent } from './group-listing/group-listing.component';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';
import { GroupDetailsComponent } from './group-details/group-details.component';

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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }

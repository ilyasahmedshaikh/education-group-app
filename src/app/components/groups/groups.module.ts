import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';
import { GroupListingComponent } from './group-listing/group-listing.component';
import { GroupDetailsComponent } from './group-details/group-details.component';


@NgModule({
  declarations: [GroupsComponent, AddEditGroupComponent, GroupListingComponent, GroupDetailsComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }

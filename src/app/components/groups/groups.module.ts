import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';
import { GroupListingComponent } from './group-listing/group-listing.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupDecsriptionComponent } from './group-decsription/group-decsription.component';
import { GroupEventsComponent } from './group-events/group-events.component';


@NgModule({
  declarations: [GroupsComponent, AddEditGroupComponent, GroupListingComponent, GroupDetailsComponent, GroupDecsriptionComponent, GroupEventsComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class GroupsModule { }

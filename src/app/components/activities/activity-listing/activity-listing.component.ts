import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-listing',
  templateUrl: './activity-listing.component.html',
  styleUrls: ['./activity-listing.component.scss']
})
export class ActivityListingComponent implements OnInit {

  List: any = [
    { title: "New post in UWI Students Union Mona", subTitle: "Message from the Uwi Inter-campus guild presidents"},
    { title: "New post in UWI Students Union Mona", subTitle: "Guild voters list check"},
    { title: "New post in UWI Students Union Mona", subTitle: "Guild voters list check"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

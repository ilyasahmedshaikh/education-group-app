import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-listing',
  templateUrl: './group-listing.component.html',
  styleUrls: ['./group-listing.component.scss']
})
export class GroupListingComponent implements OnInit {

  List: any = [
    { title: "LRH Hall", subTitle: "This is the official dorm group for LRH"},
    { title: "Soccer Team", subTitle: "Soccer group for first team UWI players"},
    { title: "Medical Faculty Notes Sharing", subTitle: "Share notes. lets help eachother out"},
    { title: "LRH Hall", subTitle: "This is the official dorm group for LRH"},
    { title: "Soccer Team", subTitle: "Soccer group for first team UWI players"},
    { title: "Medical Faculty Notes Sharing", subTitle: "Share notes. lets help eachother out"},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

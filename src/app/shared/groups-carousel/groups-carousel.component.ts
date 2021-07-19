import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-carousel',
  templateUrl: './groups-carousel.component.html',
  styleUrls: ['./groups-carousel.component.scss']
})
export class GroupsCarouselComponent implements OnInit {

  @Input('data') groups: any;
  @Input('title') title: any;

  constructor() { }

  ngOnInit(): void {
  }

}

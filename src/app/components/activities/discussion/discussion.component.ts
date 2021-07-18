import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  chat: any = [
    {
      image: '/assets/img/girl2.jpg',
      name: "Alissa",
      message: "Hey, I need some details on this Announcement. please",
      createdAt: new Date(),
      user_type: 'sender'
    },
    {
      image: '/assets/img/man.jpg',
      name: "Admin",
      message: "Sure, this is an announcement for the examinations held at Main campus",
      createdAt: new Date(),
      user_type: 'receiver'
    },
    {
      image: '/assets/img/girl2.jpg',
      name: "Alissa",
      message: "Ok. got it, thanks",
      createdAt: new Date(),
      user_type: 'sender'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

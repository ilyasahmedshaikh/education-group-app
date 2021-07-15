import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  List: any = [
    { personImg: "assets/img/man.jpg", personName: "Danny Miles", personComment: "commented on your photo"},
    { personImg: "assets/img/girl.jpg", personName: "Emma Carel", personComment: "commented on your photo"},
    { personImg: "assets/img/man2.jpg", personName: "Jodan Kade", personComment: "commented on your photo"},
    { personImg: "assets/img/girl2.jpg", personName: "Sofia Ella", personComment: "commented on your photo"},
    { personImg: "assets/img/man3.jpg", personName: "Shane Miliano", personComment: "commented on your photo"},
    { personImg: "assets/img/girl3.jpg", personName: "Mia Rosie", personComment: "commented on your photo"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

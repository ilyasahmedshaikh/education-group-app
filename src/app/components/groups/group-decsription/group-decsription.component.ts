import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-decsription',
  templateUrl: './group-decsription.component.html',
  styleUrls: ['./group-decsription.component.scss']
})
export class GroupDecsriptionComponent implements OnInit {

  List: any = [
    { image: "assets/img/man.jpg", name: "Danny Miles" },
    { image: "assets/img/girl.jpg", name: "Emma Carel" },
    { image: "assets/img/man2.jpg", name: "Jodan Kade" },
  ]

  faqs: any = [
    { id: 1, question: 'Sample FAQ 1', answer: 'Sample Answer 1' },
    { id: 2, question: 'Sample FAQ 2', answer: 'Sample Answer 2' },
    { id: 3, question: 'Sample FAQ 3', answer: 'Sample Answer 3' },
    { id: 4, question: 'Sample FAQ 4', answer: 'Sample Answer 4' },
  ]

  links: any = [
    { id: 1, description: "How Online Courses Work", url: "https://www.onlineeducation.com/guide/online-learning-faqs" },
    { id: 2, description: "How Online Courses Work", url: "https://www.onlineeducation.com/guide/online-learning-faqs" },
    { id: 3, description: "How Online Courses Work", url: "https://www.onlineeducation.com/guide/online-learning-faqs" },
    { id: 4, description: "How Online Courses Work", url: "https://www.onlineeducation.com/guide/online-learning-faqs" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

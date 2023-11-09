import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  defaultportfolio = [
    {
      photo: 'assets/img/costic/portfolio-6.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/costic/portfolio-1.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/costic/portfolio-2.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/costic/portfolio-5.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/costic/portfolio-4.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
    {
      photo: 'assets/img/costic/portfolio-3.jpg',
      title: "Minimal Cup with Coffee",
      likes: "(950)",
      comments: "(150)",
    },
  ];
  minimalportfolio = [
    {
      photo: 'assets/img/costic/portfolio-4.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/costic/portfolio-1.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/costic/portfolio-2.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/costic/portfolio-5.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/costic/portfolio-6.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
    {
      photo: 'assets/img/costic/portfolio-3.jpg',
      name: "Minimal Cup with Coffee",
      desc: "Portfolio - Showcase",
    },
  ]

  ngOnInit(): void {
  }

}

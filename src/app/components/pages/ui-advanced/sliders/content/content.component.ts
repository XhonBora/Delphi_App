import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  defaultslide = [
    { bigimg:"assets/img/costic/add-product-1.jpg", img: 'assets/img/costic/banner-1.jpg', title: 'Orange Sunset', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/costic/add-product-2.jpg", img: 'assets/img/costic/banner-2.jpg', title: 'Purple Skies', text: 'Lorem Ipsum asit dolor kimet' },
    { bigimg:"assets/img/costic/add-product-3.jpg", img: 'assets/img/costic/banner-3.jpg', title: 'Night Light', text: 'Lorem Ipsum asit dolor kimet' },
  ];

  ngOnInit(): void {
  }

}

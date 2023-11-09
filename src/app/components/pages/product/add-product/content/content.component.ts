import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  defaultslide = [
    {img:"assets/img/costic/add-product-1.jpg",title:"img"},
    {img:"assets/img/costic/add-product-2.jpg",title:"img"},
    {img:"assets/img/costic/add-product-3.jpg",title:"img"},
  ];

  ngOnInit(): void {
  }

}

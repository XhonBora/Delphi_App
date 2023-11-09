import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  tabledata = [
    {
      photo: "assets/img/costic/customer-1.jpg",
      id: 1,
      buyer: "Chihoo Hwang",
      service: "Wordpress Template",
      productid: "67384917",
    },
    {
      photo: "assets/img/costic/customer-2.jpg",
      id: 2,
      buyer: "Ajay Suryavanash",
      service: "Business Card",
      productid: "789393819",
    },
    {
      photo: "assets/img/costic/customer-3.jpg",
      id: 3,
      buyer: "John Doe",
      service: "App Customization",
      productid: "137893137",
    },
    {
      photo: "assets/img/costic/customer-4.jpg",
      id: 4,
      buyer: "Alesdro Guitto",
      service: "Dashboard Design",
      productid: "235193138",
    },
    {
      photo: "assets/img/costic/customer-5.jpg",
      id: 5,
      buyer: "Manbir Sahwny",
      service: "Theme Development",
      productid: "19938917",
    },
  ]

  ngOnInit(): void {
  }

}

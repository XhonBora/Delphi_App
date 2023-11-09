import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // Order List
  orderList = [
    {
      id: 1,
      name: "French Fries",
      customername: "Jhon Leo",
      location: "New Town",
      status: "Pending",
      deliverytime: "10:05",
      price: 10
    },
    {
      id: 2,
      name: "Mango Pie",
      customername: "Kristien",
      location: "Old Town",
      status: "Cancelled",
      deliverytime: "14:05",
      price: 9
    },
    {
      id: 3,
      name: "Fried Egg Sandwich",
      customername: "Jack Suit",
      location: "Oxford Street",
      status: "Delivered",
      deliverytime: "12:05",
      price: 19
    },
    {
      id: 4,
      name: "Lemon Yogurt Parfait",
      customername: "Alesdro Guitto",
      location: "Church hill",
      status: "Delivered",
      deliverytime: "12:05",
      price: 18
    },
    {
      id: 5,
      name: "Spicy Grill Sandwich",
      customername: "Jacob Sahwny",
      location: "Palace Road",
      status: "Delivered",
      deliverytime: "12:05",
      price: 21
    },
    {
      id: 6,
      name: "Chicken Sandwich",
      customername: "Peter Gill",
      location: "Street 21",
      status: "Pending",
      deliverytime: "12:05",
      price: 15
    },
    {
      id: 7,
      name: "Sandwich",
      customername: "Jhon Leo",
      location: "New Town",
      status: "Delivered",
      deliverytime: "10:05",
      price: 19
    },
    {
      id: 8,
      name: "Spaghetti",
      customername: "Kristien",
      location: "Old Town",
      status: "Delivered",
      deliverytime: "14:05",
      price: 18
    },
    {
      id: 9,
      name: "Fried Rice",
      customername: "Jacob Sahwny",
      location: "Oxford Street",
      status: "Delivered",
      deliverytime: "11:05",
      price: 20
    },
    {
      id: 10,
      name: "Noodels",
      customername: "Alesdro Guitto",
      location: "Church hill",
      status: "Delivered",
      deliverytime: "12.05",
      price: 22
    }
  ];

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // Pie Chart
  public salesType: ChartType = 'pie';
  public salesLabels: Label[] = ["Hunger House", "Food Lounge", "Delizious", "Red Resturant", "Hunger Lounge"];
  public salesData: ChartDataSets[] = [
    {
      label: "Users (thousands)",
      backgroundColor: ["#ff0018", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
      data: [725, 890, 729, 316, 275]
    }
  ];
  public salesOptions: ChartOptions = {
    responsive: true,
    title: {
      display: false,
      text: 'Users By Country'
    },
    legend: {
      display: false
    },
  };
  // Top Menu
  topMenu = [
    {
      img: "assets/img/costic/pizza.jpg",
      title: "Pizza",
      price: 19.99,
      id: 67384917
    },
    {
      img: "assets/img/costic/french-fries.jpg",
      title: "French Fries",
      price: 14.59,
      id: 789393819
    },
    {
      img: "assets/img/costic/cereals.jpg",
      title: "Multigrain Hot Cereal",
      price: 25.22,
      id: 137893137
    },
    {
      img: "assets/img/costic/egg-sandwich.jpg",
      title: "Fried Egg Sandwich",
      price: 11.23,
      id: 235193138
    }
  ];
  // Table List
  tableList = [
    {
      id: 15451,
      name: "Delizus",
      location: "New York",
      rating: 4,
      joiningdate: "12/01/21",
      sale: 90 //In Percentage
    },
    {
      id: 15452,
      name: "Lumina",
      location: "New York",
      rating: 4,
      joiningdate: "13/01/21",
      sale: 99 //In Percentage
    },
    {
      id: 15453,
      name: "Food Loung",
      location: "New York",
      rating: 4,
      joiningdate: "14/01/21",
      sale: 95 //In Percentage
    },
    {
      id: 15454,
      name: "Hungry House",
      location: "New York",
      rating: 4,
      joiningdate: "15/01/21",
      sale: 88 //In Percentage
    },
    {
      id: 15455,
      name: "Luncheon",
      location: "New York",
      rating: 4,
      joiningdate: "16/01/21",
      sale: 81 //In Percentage
    },
    {
      id: 15456,
      name: "Spice 'n' Steam",
      location: "New York",
      rating: 4,
      joiningdate: "17/01/21",
      sale: 91 //In Percentage
    },
    {
      id: 15457,
      name: "Tomato",
      location: "New York",
      rating: 4,
      joiningdate: "18/01/21",
      sale: 77 //In Percentage
    },
    {
      id: 15458,
      name: "Bardojo",
      location: "New York",
      rating: 4,
      joiningdate: "19/01/21",
      sale: 78 //In Percentage
    },
    {
      id: 15459,
      name: "Deliceiux",
      location: "New York",
      rating: 4,
      joiningdate: "20/01/21",
      sale: 88 //In Percentage
    },
    {
      id: 15460,
      name: "Food Forest",
      location: "New York",
      rating: 4,
      joiningdate: "21/01/21",
      sale: 75 //In Percentage
    },
    {
      id: 15461,
      name: "Food Bella",
      location: "New York",
      rating: 4,
      joiningdate: "22/01/21",
      sale: 90 //In Percentage
    },
    {
      id: 15462,
      name: "Red Chilly",
      location: "New York",
      rating: 4,
      joiningdate: "23/01/21",
      sale: 85 //In Percentage
    }
  ];
  ngOnInit(): void {
  }

}

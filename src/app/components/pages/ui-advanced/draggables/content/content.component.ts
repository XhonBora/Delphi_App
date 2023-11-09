import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  cardblock = [
    { img: 'assets/img/costic/food-7.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/costic/food-8.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/costic/food-5.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/costic/food-6.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
  ];
  sortablelist = [
    { icon: 'border_color', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'rss_feed', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'rss_feed', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
  ];
  progresslist = [
    { icon: 'devices', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'fingerprint', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'graphic_eq', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
  ];
  todolist = [
    { img: 'assets/img/costic/pizza.jpg', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { img: 'assets/img/costic/french-fries.jpg', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { img: 'assets/img/costic/cereals.jpg', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
  ];

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // Skills
  skills = [
    { title: 'Web Design', limit: 83 },
    { title: 'Development', limit: 50 },
    { title: 'Interface Design', limit: 75 },
    { title: 'Illustration', limit: 92 },
    { title: 'Brand Design', limit: 97 },
    { title: 'Adobe', limit: 90 },
  ];
  // Information
  information = [
    { title: 'Full Name', text: 'Chihoo Hwang' },
    { title: 'Birthday', text: 'January 25th, 1996' },
    { title: 'Language', text: 'English (US)' },
    { title: 'Website', text: 'www.example.com' },
    { title: 'Phone Number', text: '+123 456 789' },
    { title: 'Email Address', text: 'example@mail.com' },
    { title: 'Location', text: 'New York, USA' },
  ];
  // Work Exp
  workexp = [
    { logo: 'assets/img/costic/customer-1.jpg', name: 'Mike Labinstine', time: 'January 2022 to Present', designation: 'Veg Cook' },
    { logo: 'assets/img/costic/customer-2.jpg', name: 'George Labinstin', time: 'January 2013 to Present', designation: 'Meat Cook' },
    { logo: 'assets/img/costic/customer-3.jpg', name: 'Jessy Doe', time: 'January 2022 to Present', designation: 'Top Cheff' },
    { logo: 'assets/img/costic/customer-4.jpg', name: 'Jessica Doe', time: 'January 2013 to Present', designation: 'Night Cheff' },
    { logo: 'assets/img/costic/customer-5.jpg', name: 'Jhone Doe', time: 'January 2022 to Present', designation: 'The Cheff' },
    { logo: 'assets/img/costic/customer-6.jpg', name: 'Manti Jhoe', time: 'January 2013 to Present', designation: 'Quality Control' },
  ];
  // Projects
  projects = [
    {
      username: 'Wright Doe',
      userimg: 'assets/img/costic/customer-1.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/costic/food-3.jpg',
      likes: 982,
      comments: 785
    },
    {
      username: 'Anna Wright',
      userimg: 'assets/img/costic/customer-2.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/costic/food-6.jpg',
      likes: 982,
      comments: 785
    },
    {
      username: 'James Anderson',
      userimg: 'assets/img/costic/customer-6.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/costic/food-1.jpg',
      likes: 982,
      comments: 785
    },
  ];
  cardblock = [
    { img: 'assets/img/costic/food-1.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/costic/food-2.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/costic/food-3.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/costic/food-4.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
  ];
  // Icon box
  statbox = [
    {
      icon: 'email',
      title: 'Email Message',
      text: 'Email App',
      notification: 5
    },
    {
      icon: 'person',
      title: 'Follow Request',
      text: 'User Profile',
      notification: 5
    },
    {
      icon: 'show_chart',
      title: 'New Sales',
      text: 'Sales',
      notification: 3
    },
    {
      icon: 'graphic_eq',
      title: 'Voicemail',
      text: 'Chat App',
      notification: 2
    },
  ];
  ngOnInit(): void {
  }

}

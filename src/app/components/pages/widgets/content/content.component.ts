import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import chats from '../../../../data/chats.json';
import groups from '../../../../data/groups.json';
import contacts from '../../../../data/contact.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public chatspost = chats;
  public groupspost = groups;
  public contactspost = contacts;
  removeItem(item: number): void {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      this.chatspost.splice(item, 1);
    }
  }
  // Line Chart
  public LineChartType: ChartType = 'line';
  public data_1 = [4100, 3800, 3200, 3400, 2700, 3600, 3300, 3700, 4900];
  public data_2 = [2800, 2600, 2300, 2800, 3600, 2900, 3000, 3100, 3600, 3000, 3100, 3200];
  public infographicsLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
  public infographicsLabels2: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19", "Jan-20", "Jan-21", "Jan-22"];
  public infographicsLabels3: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
  public infographicsOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: false,
      position: "bottom"
    },
    scales: {
      yAxes: [{
        display: false,
      }],
      xAxes: [{
        display: false,
      }]
    }
  };
  // Sell Graph
  public sellGraph: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#000000',
      pointBorderColor: '#000000',
      pointBackgroundColor: '#000000',
      pointHoverBackgroundColor: '#000000',
      pointHoverBorderColor: '#000000',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(25, 25, 25, 0.12)",
      borderWidth: 2,
      data: this.data_1
    }
  ];
  // Total Visitors
  public totalVisitors: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ff0018',
      pointBorderColor: '#ff0018',
      pointBackgroundColor: '#ff0018',
      pointHoverBackgroundColor: '#ff0018',
      pointHoverBorderColor: '#ff0018',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(255, 0, 24, 0.11)",
      borderWidth: 2,
      data: this.data_2
    }
  ];
  // New Users
  public newUsers: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#000000',
      pointBorderColor: '#000000',
      pointBackgroundColor: '#000000',
      pointHoverBackgroundColor: '#000000',
      pointHoverBorderColor: '#000000',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(25, 25, 25, 0.12)",
      borderWidth: 2,
      data: [5, 6, 8, 1, 5, 3, 9, 7, 5, 8, 7, 3, 6, 9, 1]
    }
  ];
  // Total Orders
  public totalOrders: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ff0018',
      pointBorderColor: '#ff0018',
      pointBackgroundColor: '#ff0018',
      pointHoverBackgroundColor: '#ff0018',
      pointHoverBorderColor: '#ff0018',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(255, 0, 24, 0.11)",
      borderWidth: 2,
      data: [1, 4, 7, 3, 5, 7, 6, 5, 8, 3, 5, 5, 4, 3, 7]
    }
  ];
  // Notifications
  notifications = [
    {
      icon: 'email',
      title: 'Email Message',
      text: 'Email App',
      notification: 5
    },
    {
      icon: 'person',
      title: 'Followers',
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
  // Useractivity
  userActivity = [
    {
      countryflag: 'assets/img/costic/country-1.jpg',
      entrance: 725,
      bouncerate: 17.24,
      exits: 7.65,
    },
    {
      countryflag: 'assets/img/costic/country-2.jpg',
      entrance: 890,
      bouncerate: 12.90,
      exits: 9.12,
    },
    {
      countryflag: 'assets/img/costic/country-3.jpg',
      entrance: 729,
      bouncerate: 20.75,
      exits: 14.29,
    },
    {
      countryflag: 'assets/img/costic/country-4.jpg',
      entrance: 316,
      bouncerate: 32.09,
      exits: 10.99,
    },
    {
      countryflag: 'assets/img/costic/country-5.jpg',
      entrance: 275,
      bouncerate: 33.58,
      exits: 6.75,
    },
  ];
  // Sales History
  salesHistory = [
    { price: 7860.24, title: "Chiken Burger", date: '12.11.2022' },
    { price: 3360.14, title: "Cheese Pizza", date: '12.11.2022' },
    { price: 1264.99, title: "Stuffed Burger", date: '12.11.2022' },
    { price: 3789.31, title: "Classic Pizza", date: '12.11.2022' },
    { price: 3789.31, title: "Pancake", date: '12.11.2022' },
    { price: 3789.31, title: "Pancake", date: '12.11.2022' },
  ];
  // User chat
  public currentUserId = 1;
  chats = [
    {
      userImg: 'assets/img/costic/customer-7.jpg',
      userId: 1,
      time: '10:33 pm',
      message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
      userImg: 'assets/img/costic/customer-8.jpg',
      userId: 2,
      time: '11:01 pm',
      message: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
    },
  ];

  getChatInitialMsg(item: { userId: number; userImg: string; }, i: number) {
    var content = '';
    i === 0 || (i !== 0 && this.chats[i - 1].userId !== item.userId) ?
      content += '<div class="ms-chat-status ms-status-online ms-chat-img">' +
      '<img src="' + item.userImg + '" class="ms-img-round" alt="people">' +
      '</div>' : content = '';
    return content;
  };

  getChatInitialTime(item: { userId: number; time: string; }, i: number) {
    var content = '';
    i === this.chats.length - 1 || (i + 1 <= this.chats.length - 1 && this.chats[i + 1].userId !== item.userId) ?
      content += '<p class="ms-chat-time">' + item.time + '</p>' : content = '';
    return content;
  };
// Tasks
  // Task modal
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'on-load-modal' });
  }
  // Add task
  taks: string;
  lastActiveBox: number;
  onClickTask() {
    if (this.taks == '' || this.taks == undefined || this.taks == null) return;
    this.tasks.unshift({ name: this.taks, state: false });
    this.taks = '';
  }
  tasks = [
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      state: false
    }
  ];
  removeTask(i: number): void {
    if (window.confirm("Are you sure you want to delete this task?")) {
      this.tasks.splice(i, 1);
    }
  }
  taskComplete(task: { state: boolean; }) {
    task.state == true ? task.state = false : task.state = true;
  };
  // Favourite Table
  favouriteTable = [
    {
      name: "Hunger House",
      qty: 8528,
      orders: 17.24,
      profits: 7.65,
      profit: true
    },
    {
      name: "Food Lounge",
      qty: 4867,
      orders: 12.24,
      profits: 9.12,
      profit: false
    },
    {
      name: "Delizious",
      qty: 7538,
      orders: 32.04,
      profits: 14.29,
      profit: true
    },
    {
      name: "Netherfood",
      qty: 1614,
      orders: 20.75,
      profits: 12.25,
      profit: false
    },
    {
      name: "Rusmiz",
      qty: 7538,
      orders: 32.04,
      profits: 14.29,
      profit: true
    }
  ];
  // Followers
  followerlist = [
    { img: 'assets/img/costic/customer-1.jpg', name: 'Nathaniel Bustos', post: 'Quality Manager', success: true, primary: false },
    { img: 'assets/img/costic/customer-2.jpg', name: 'Anny Farisha', post: 'Chef', success: false, primary: true },
    { img: 'assets/img/costic/customer-3.jpg', name: 'James Zathila', post: 'Delivery Manager', success: false, primary: true },
    { img: 'assets/img/costic/customer-4.jpg', name: 'Jhon Deo', post: 'Head Chef', success: true, primary: false },
    { img: 'assets/img/costic/customer-5.jpg', name: 'Khadiza Rehna', post: 'Manager', success: false, primary: true },
    { img: 'assets/img/costic/customer-6.jpg', name: 'Peter Amber', post: 'Content Writer', success: true, primary: false },
    { img: 'assets/img/costic/customer-7.jpg', name: 'Helen Southern', post: 'Food Tester', success: true, primary: false },
  ]

  ngOnInit(): void {
  }

}

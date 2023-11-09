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
  // Recent Orders
  recentOrders = [
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
  // Monthly Revenue
  monthlyRevenue = [
    {
      title: "Month 1",
      value: 25
    },
    {
      title: "Month 2",
      value: 50
    },
    {
      title: "Month 3",
      value: 75
    },
    {
      title: "Month 4",
      value: 40
    }
  ];
  // Trending Orders
  trendingOrders = [
    {
      title: "Meat Stew",
      img: "assets/img/costic/food-2.jpg",
      price: 25,
      orders: 15
    },
    {
      title: "Pancake",
      img: "assets/img/costic/food-3.jpg",
      price: 50,
      orders: 75
    },
    {
      title: "Burger",
      img: "assets/img/costic/food-4.jpg",
      price: 45,
      orders: 85
    },
    {
      title: "Saled",
      img: "assets/img/costic/food-5.jpg",
      price: 85,
      orders: 175
    }
  ];
  // Order Timing Chart
  public BarChart: ChartType = 'bar';
  public orderLabels: Label[] = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  public orderOptions: ChartOptions = {
    responsive: true,
    legend: { display: false },
    title: {
      display: false,
    },
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };
  public orderGraph: ChartDataSets[] = [
    {
      label: "Repeat order",
      backgroundColor: '#ff0018',
      data: [7, 6, 3, 5, 4, 2, 3, 6, 8, 5, 7]
    }, {
      label: "New order",
      backgroundColor: '#000000',
      data: [0, -4, -2, 0, -5, -3, 0, 0, -2, -5, -3]
    }
  ];
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
  // Recently Placed Orders
  recentlyOrders = [
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
    }
  ];
  // New Restaurant Listings
  newListings = [
    {
      title: "Hunger House",
      img: "assets/img/costic/customer-1.jpg",
      productBanner: "assets/img/costic/food-1.jpg",
      addbeforetime: "30 seconds ago",
      rating: 5,
      shortdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
      likes: 982,
      comment: 785
    },
    {
      title: "Food Lounge",
      img: "assets/img/costic/customer-2.jpg",
      productBanner: "assets/img/costic/food-2.jpg",
      addbeforetime: "30 seconds ago",
      rating: 4,
      shortdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
      likes: 982,
      comment: 785
    },
    {
      title: "Delizious",
      img: "assets/img/costic/customer-3.jpg",
      productBanner: "assets/img/costic/food-3.jpg",
      addbeforetime: "30 seconds ago",
      rating: 4,
      shortdesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
      likes: 982,
      comment: 785
    }
  ];
  // Recent Support Tickets
  supportTickets = [
    {
      userimg: 'assets/img/costic/customer-4.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2022',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 16,
      attachment: 3,
      open: true,
      close: false,
    },
    {
      userimg: 'assets/img/costic/customer-1.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2022',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 11,
      attachment: 1,
      open: true,
      close: false,
    },
    {
      userimg: 'assets/img/costic/customer-7.jpg',
      username: 'Lorem ipsum dolor',
      date: 'February 24, 2022',
      query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
      comment: 21,
      attachment: 5,
      open: false,
      close: true,
    },
  ];
  // CHat
  public currentUserId = 1;
  chats = [
    {
      userImg: 'assets/img/costic/customer-1.jpg',
      userId: 1,
      time: '10:33 pm',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      userImg: 'assets/img/costic/customer-2.jpg',
      userId: 2,
      time: '11:01 pm',
      message: "I'm doing great, thanks for asking"
    },
    {
      userImg: 'assets/img/costic/customer-2.jpg',
      userId: 2,
      time: '11:01 pm',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      userImg: 'assets/img/costic/customer-1.jpg',
      userId: 1,
      time: '11:03 pm',
      message: 'It is a long established fact that a reader will be distracted by the readable content of a page'
    },
    {
      userImg: 'assets/img/costic/customer-1.jpg',
      userId: 1,
      time: '11:03 pm',
      message: 'There are many variations of passages of Lorem Ipsum available'
    },
  ]

  getChatInitialMsg(item: { userId: number; userImg: string; }, i: number) {
    var content = '';
    i === 0 || (i !== 0 && this.chats[i - 1].userId !== item.userId) ?
      content += '<div class="ms-chat-status ms-status-online ms-chat-img">' +
      '<img src="' + item.userImg + '" class="ms-img-round" alt="people">' +
      '</div>' : content = '';
    return content;
  }

  getChatInitialTime(item: { userId: number; time: string; }, i: number) {
    var content = '';
    i === this.chats.length - 1 || (i + 1 <= this.chats.length - 1 && this.chats[i + 1].userId !== item.userId) ?
      content += '<p class="ms-chat-time">' + item.time + '</p>' : content = '';
    return content;
  }

  ngOnInit(): void {
  }

}

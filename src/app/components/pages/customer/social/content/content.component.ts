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
  model = 1;
  // Youtube Subscriber
  // Bar chart
  public data_1 = [7, 6, 3, 5, 4, 2, 3, 6, 8, 5, 7];
  public data_2 = [0, -4, -2, 0, -5, -3, 0, 0, -2, -5, -3];
  public barChartType: ChartType = 'bar';
  public ytsusChartLabels: Label[] = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  public ytsusChartData: ChartDataSets[] = [
    {
      label: "Subscribers Gained",
      backgroundColor: '#ff0018',
      data: this.data_1
    }, {
      label: "Subscribers List",
      backgroundColor: '#ec4e3f',
      data: this.data_2
    }
  ];
  public ytsusChartOptions: ChartOptions = {
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
  public day(): void {
    this.ytsusChartData[0].data = [7, 6, 3, 5, 4, 2, 3, 6, 8, 5, 7];
    this.ytsusChartData[1].data = [0, -4, -2, 0, -5, -3, 0, 0, -2, -5, -3];
    this.ytsusChartLabels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  }
  public month(): void {
    this.ytsusChartData[0].data = [24, 27, 21, 27, 24, 23, 25, 28, 21, 23, 24, 27];
    this.ytsusChartData[1].data = [-25, -24, -23, -27, -21, -23, 0, 0, -23, 0, -26, -23];
    this.ytsusChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  }
  public year(): void {
    this.ytsusChartData[0].data = [300, 321, 259, 391, 429, 249, 300, 183, 341, 412, 422, 214];
    this.ytsusChartData[1].data = [-120, -85, -31, -180, -51, -44, -101, -125, -44, -31, -34, -29];
    this.ytsusChartLabels = ["2007", "2008", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2022"];
  }
  // Top food menu
  topFoodmenu = [
    {
      id:1,
      img:"assets/img/costic/pizza.jpg",
      itemname:"Pizza",
      productId:67384917,
      price:20
    },
    {
      id:2,
      img:"assets/img/costic/french-fries.jpg",
      itemname:"French Fries",
      productId:789393819,
      price:14
    },
    {
      id:3,
      img:"assets/img/costic/cereals.jpg",
      itemname:"Multigrain Hot Cereal",
      productId:137893137,
      price:25
    },
    {
      id:4,
      img:"assets/img/costic/egg-sandwich.jpg",
      itemname:"Fried Egg Sandwich",
      productId:235193138,
      price:10
    },
    {
      id:5,
      img:"assets/img/costic/pizza.jpg",
      itemname:"Garlic Bread",
      productId:235193138,
      price:17
    },
    {
      id:6,
      img:"assets/img/costic/egg-sandwich.jpg",
      itemname:"Fried Egg Sandwich",
      productId:235193138,
      price:10
    },
    {
      id:7,
      img:"assets/img/costic/french-fries.jpg",
      itemname:"French Fries",
      productId:235193138,
      price:20
    }
  ];
  // Twitter post
  twitterpost = [
    {
      userimg: 'assets/img/costic/customer-4.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
    {
      userimg: 'assets/img/costic/customer-5.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
    {
      userimg: 'assets/img/costic/customer-6.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
    {
      userimg: 'assets/img/costic/customer-7.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
    {
      userimg: 'assets/img/costic/customer-8.jpg',
      name: 'Rakhan Potik',
      username: 'rakhan45',
      tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
      retweet: '1.9k',
      likes: '2.5k',
      tags: [
        {
          tag: 'design',
        },
        {
          tag: 'article',
        },
        {
          tag: 'interface',
        }
      ]
    },
  ];
  // Facebook post
  facebookfeed = [
    {
      userimg: 'assets/img/costic/customer-1.jpg',
      name: 'Rakhan Potik',
      postdatetime: '24 January at 9:04 pm',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      postimg: 'assets/img/costic/food-2.jpg',
      likes: 485,
      comment: 48,
    },
    {
      userimg: 'assets/img/costic/customer-9.jpg',
      name: 'Rakhan Potik',
      postdatetime: '24 January at 9:04 pm',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      postimg: 'assets/img/costic/food-1.jpg',
      likes: 485,
      comment: 48,
    },
  ];
  // Insta post
  instagramfeed = [
    {
      userimg: 'assets/img/costic/customer-10.jpg',
      username: 'username24',
      postimg: 'assets/img/costic/food-7.jpg',
      post: 'website design in progress',
      tags: [
        {
          tag: 'design'
        },
        {
          tag: 'ui'
        },
        {
          tag: 'ux'
        },
        {
          tag: 'website'
        },
      ],
      shareuser: [
        {
          img: 'assets/img/costic/customer-6.jpg'
        },
        {
          img: 'assets/img/costic/customer-7.jpg'
        },
      ]
    },
    {
      userimg: 'assets/img/costic/customer-5.jpg',
      username: 'username24',
      postimg: 'assets/img/costic/food-8.jpg',
      post: 'website design in progress',
      tags: [
        {
          tag: 'design'
        },
        {
          tag: 'ui'
        },
        {
          tag: 'ux'
        },
        {
          tag: 'website'
        },
      ],
      shareuser: [
        {
          img: 'assets/img/costic/customer-1.jpg'
        },
        {
          img: 'assets/img/costic/customer-7.jpg'
        },
      ]
    },
  ];

  ngOnInit(): void {
  }

}

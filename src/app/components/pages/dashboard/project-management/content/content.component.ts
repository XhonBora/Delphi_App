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
  // Recent Buyers
  recentbuyers = [
    {
        userimg: 'assets/img/costic/customer-1.jpg',
        username: 'Chihoo Hwang',
        servicename: 'Wordpress Template',
        productid: 67384917
    },
    {
        userimg: 'assets/img/costic/customer-2.jpg',
        username: 'Ajay Suryavanash',
        servicename: 'Business Card',
        productid: 789393819
    },
    {
        userimg: 'assets/img/costic/customer-3.jpg',
        username: 'John Doe',
        servicename: 'App Customization',
        productid: 137893137
    },
    {
        userimg: 'assets/img/costic/customer-4.jpg',
        username: 'Alesdro Guitto',
        servicename: 'Dashboard Design',
        productid: 235193138
    },
    {
        userimg: 'assets/img/costic/customer-5.jpg',
        username: 'Manbir Sahwny',
        servicename: 'Theme Development',
        productid: 19938917
    },
];
  // Project Sales
  public lineChartType: ChartType = 'line';
  public pmChartLabels: Label[] = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  public pmChartData: ChartDataSets[] = [
    {
      label: "Traffic",
      borderColor: '#ff0018',
      pointBorderWidth: 9,
      pointRadius: 9,
      pointBorderColor: 'transparent',
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: '#ff0018',
      pointBackgroundColor: 'transparent',
      fill: true,
      backgroundColor: "rgba(53,127,250,0.4)",
      borderWidth: 2,
      data: [3800, 3900, 3300, 3800, 4000, 4200, 4400, 3800, 4600, 3900, 3800]
    }, {
      label: "Sales",
      borderColor: '#ec4e3f',
      pointBorderWidth: 9,
      pointRadius: 9,
      pointBorderColor: 'transparent',
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: '#ec4e3f',
      pointBackgroundColor: 'transparent',
      fill: true,
      backgroundColor: "rgba(236, 78, 63,0.4)",
      borderWidth: 2,
      data: [2100, 3000, 2200, 2400, 2800, 2600, 2800, 2600, 2300, 2900, 2800]
    }
  ];
  public pmChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    tooltips: {
      titleFontColor: '#3a3952',
      bodyFontFamily: 'Roboto',
      backgroundColor: '#FFF',
      bodyFontColor: '#878793',
      bodyFontSize: 14,
      displayColors: false,
      bodySpacing: 10,
      intersect: false,
      bodyFontStyle: 'bold',
      xPadding: 15,
      yPadding: 15,
      mode: 'index'
    },
    legend: {
      display: false,
      position: "top"
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#A8A9AD",
          beginAtZero: true,
          maxTicksLimit: 200,
          padding: 20
        },
        gridLines: {
          drawTicks: false,
          display: false
        }

      }],
      xAxes: [{
        gridLines: {
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          beginAtZero: true,
          fontColor: "#A8A9AD"
        }
      }]
    }
  };
  public day(): void {
    this.pmChartData[0].data = [3800, 3900, 3300, 3800, 4000, 4200, 4400, 3800, 4600, 3900, 3800];
    this.pmChartData[1].data = [2100, 3000, 2200, 2400, 2800, 2600, 2800, 2600, 2300, 2900, 2800];
    this.pmChartLabels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  }
  public month(): void {
    this.pmChartData[0].data = [4800, 4900, 4300, 4800, 5000, 5200, 5400, 4800, 5600, 4900, 4800, 5500];
    this.pmChartData[1].data = [3100, 4000, 3200, 3400, 3800, 3600, 3800, 3600, 3300, 3900, 3800, 2500];
    this.pmChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  }
  public year(): void {
    this.pmChartData[0].data = [6800, 6900, 6300, 6800, 7000, 7200, 7400, 6800, 7600, 6900, 6800, 7500];
    this.pmChartData[1].data = [5100, 6000, 5200, 5400, 5800, 5600, 5800, 5600, 5300, 5900, 5800, 4500];
    this.pmChartLabels = ["2007", "2008", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2021"];
  }
  // Latest Project
  latestProjects = [
    {
      username: 'Wright Doe',
      userimg: 'assets/img/costic/customer-1.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/costic/food-2.jpg',
      likes: 982,
      comments: 785
    },
    {
      username: 'Anna Wright',
      userimg: 'assets/img/costic/customer-4.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/costic/food-3.jpg',
      likes: 982,
      comments: 785
    },
    {
      username: 'James Anderson',
      userimg: 'assets/img/costic/customer-5.jpg',
      time: '30 seconds ago',
      title: 'This is a project name',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
      postimg: 'assets/img/costic/food-1.jpg',
      likes: 982,
      comments: 785
    },
  ];

  ngOnInit(): void {
  }

}

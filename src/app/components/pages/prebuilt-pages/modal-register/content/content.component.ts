import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import Highcharts from "highcharts/highmaps";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  model = 1;
  // audience-metrics-chart
  // Line chart
  public lineChartType: ChartType = 'line';
  public audienceChartLabels: Label[] = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  public audienceChartData: ChartDataSets[] = [
    {
      label: "Traffic",
      borderColor: "#ff0018",
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
    },
    {
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
  public audienceChartOptions: ChartOptions = {
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
  }
  public day(): void {
    this.audienceChartData[0].data = [3800, 3900, 3300, 3800, 4000, 4200, 4400, 3800, 4600, 3900, 3800];
    this.audienceChartData[1].data = [2100, 3000, 2200, 2400, 2800, 2600, 2800, 2600, 2300, 2900, 2800];
    this.audienceChartLabels = ["12 AM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM", "12 PM", "2 PM", "6 PM", "8 AM", "10 PM"];
  }
  public month(): void {
    this.audienceChartData[0].data = [4800, 4900, 4300, 4800, 5000, 5200, 5400, 4800, 5600, 4900, 4800, 5500];
    this.audienceChartData[1].data = [3100, 4000, 3200, 3400, 3800, 3600, 3800, 3600, 3300, 3900, 3800, 2500];
    this.audienceChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  }
  public year(): void {
    this.audienceChartData[0].data = [6800, 6900, 6300, 6800, 7000, 7200, 7400, 6800, 7600, 6900, 6800, 7500];
    this.audienceChartData[1].data = [5100, 6000, 5200, 5400, 5800, 5600, 5800, 5600, 5300, 5900, 5800, 4500];
    this.audienceChartLabels = ["2007", "2008", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2022"];
  }
  // Channel table
  public channelChartLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
  public channelChartOptions: ChartOptions = {
    responsive: true,
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
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
  // Trend 1
  public trend1ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [1, 3, 5, 4, 3, 3, 4, 8, 5]
    }
  ];
  // Trend 2
  public trend2ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ec4e3f',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [3, 2, 5, 4, 8, 4, 5, 2, 3]
    }
  ];
  // Trend 3
  public trend3ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [7, 5, 4, 5, 4, 7, 5, 5, 4]
    }
  ];
  // Trend 4
  public trend4ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [3, 3, 4, 6, 7, 6, 6, 4, 3]
    }
  ];
  // Trend 5
  public trend5ChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ec4e3f',
      backgroundColor: 'transparent',
      borderWidth: 2,
      data: [5, 4, 6, 7, 6, 5, 5, 7, 4]
    }
  ];
  // Page View
  pageviewTable = [
    { pagename: 'Admin Home', url: 'site.com/admin/', traffic: 7.65, impression: 17.24, positive: true },
    { pagename: 'Crypto Dashboard', url: 'site.com/admin/dashboard/crypto', traffic: 9.12, impression: 12.24, positive: false },
    { pagename: 'Widgets Page', url: 'site.com/admin/widgets', traffic: 14.29, impression: 32.04, positive: true },
    { pagename: 'Buttons Page', url: 'site.com/admin/pages/buttons', traffic: 12.25, impression: 20.75, positive: false },
    { pagename: 'Web Analaytics', url: 'site.com/admin/dashboard/web-analytics', traffic: 4.65, impression: 13.38, positive: true },
  ];
  // Website Performance
  // Channel table
  public WebChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  public WebChartOptions: ChartOptions = {
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
  // Bounce Rate
  public bouncerateChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      pointBorderColor: '#07be6e',
      pointBackgroundColor: '#07be6e',
      pointHoverBackgroundColor: '#07be6e',
      pointHoverBorderColor: '#07be6e',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(7, 190, 110,0.3)",
      borderWidth: 2,
      data: [5, 1, 8, 1, 3, 7, 8, 4, 3, 6, 8, 9, 4, 5, 8, 2, 6, 4, 8, 3]
    }
  ];
  // Page Views
  public pageviewsChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ec4e3f',
      pointBorderColor: '#ec4e3f',
      pointBackgroundColor: '#ec4e3f',
      pointHoverBackgroundColor: '#ec4e3f',
      pointHoverBorderColor: '#ec4e3f',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(236, 78, 63,0.4)",
      borderWidth: 2,
      data: [8, 5, 1, 8, 5, 9, 4, 3, 4, 5, 8, 4, 4, 8, 9, 5, 5, 1, 3, 6]
    }
  ];
  // New Sessions
  public newsessionsChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ec4e3f',
      pointBorderColor: '#ec4e3f',
      pointBackgroundColor: '#ec4e3f',
      pointHoverBackgroundColor: '#ec4e3f',
      pointHoverBorderColor: '#ec4e3f',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(236, 78, 63,0.4)",
      borderWidth: 2,
      data: [1, 6, 3, 8, 3, 4, 5, 1, 8, 5, 8, 4, 2, 4, 6, 8, 5, 3, 7, 5, 8]
    }
  ];
  // Time Site
  public timesiteChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      pointBorderColor: '#07be6e',
      pointBackgroundColor: '#07be6e',
      pointHoverBackgroundColor: '#07be6e',
      pointHoverBorderColor: '#07be6e',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(7, 190, 110,0.3)",
      borderWidth: 2,
      data: [5, 1, 8, 1, 3, 7, 8, 4, 3, 6, 8, 9, 4, 5, 8, 2, 6, 4, 8, 3]
    }
  ];
  // Site Impressions
  public siteimpressionsChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#07be6e',
      pointBorderColor: '#07be6e',
      pointBackgroundColor: '#07be6e',
      pointHoverBackgroundColor: '#07be6e',
      pointHoverBorderColor: '#07be6e',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      fill: true,
      backgroundColor: "rgba(7, 190, 110,0.3)",
      borderWidth: 2,
      data: [8, 5, 1, 8, 5, 9, 4, 3, 4, 5, 8, 4, 4, 8, 9, 5, 5, 1, 3, 6]
    }
  ];
  // User Activity
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
  // World Map
  worldMap: typeof Highcharts = Highcharts;
  worldMapchartConstructor = "mapChart";
  worldMapchartOptions: Highcharts.Options = {
    chart: {
      map: worldMap
    },
    title: {
      text: ""
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: false
    },
    colorAxis: {
      min: 0
    },
    series: [
      {
        type: "map",
        name: "Random data",
        states: {
          hover: {
            color: "#268968"
          }
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}"
        },
        allAreas: false,
        data: [
          ["fo", 0],
          ["um", 1],
          ["us", 2],
          ["jp", 3],
          ["sc", 4],
          ["in", 5],
          ["fr", 6],
          ["fm", 7],
          ["cn", 8],
          ["pt", 9],
          ["sw", 10],
          ["sh", 11],
          ["br", 12],
          ["ki", 13],
          ["ph", 14],
          ["mx", 15],
          ["es", 16],
          ["bu", 17],
          ["mv", 18],
          ["sp", 19],
          ["gb", 20],
          ["gr", 21],
          ["as", 22],
          ["dk", 23],
          ["gl", 24],
          ["gu", 25],
          ["mp", 26],
          ["pr", 27],
          ["vi", 28],
          ["ca", 29],
          ["st", 30],
          ["cv", 31],
          ["dm", 32],
          ["nl", 33],
          ["jm", 34],
          ["ws", 35],
          ["om", 36],
          ["vc", 37],
          ["tr", 38],
          ["bd", 39],
          ["lc", 40],
          ["nr", 41],
          ["no", 42],
          ["kn", 43],
          ["bh", 44],
          ["to", 45],
          ["fi", 46],
          ["id", 47],
          ["mu", 48],
          ["se", 49],
          ["tt", 50],
          ["my", 51],
          ["pa", 52],
          ["pw", 53],
          ["tv", 54],
          ["mh", 55],
          ["cl", 56],
          ["th", 57],
          ["gd", 58],
          ["ee", 59],
          ["ag", 60],
          ["tw", 61],
          ["bb", 62],
          ["it", 63],
          ["mt", 64],
          ["vu", 65],
          ["sg", 66],
          ["cy", 67],
          ["lk", 68],
          ["km", 69],
          ["fj", 70],
          ["ru", 71],
          ["va", 72],
          ["sm", 73],
          ["kz", 74],
          ["az", 75],
          ["tj", 76],
          ["ls", 77],
          ["uz", 78],
          ["ma", 79],
          ["co", 80],
          ["tl", 81],
          ["tz", 82],
          ["ar", 83],
          ["sa", 84],
          ["pk", 85],
          ["ye", 86],
          ["ae", 87],
          ["ke", 88],
          ["pe", 89],
          ["do", 90],
          ["ht", 91],
          ["pg", 92],
          ["ao", 93],
          ["kh", 94],
          ["vn", 95],
          ["mz", 96],
          ["cr", 97],
          ["bj", 98],
          ["ng", 99],
          ["ir", 100],
          ["sv", 101],
          ["sl", 102],
          ["gw", 103],
          ["hr", 104],
          ["bz", 105],
          ["za", 106],
          ["cf", 107],
          ["sd", 108],
          ["cd", 109],
          ["kw", 110],
          ["de", 111],
          ["be", 112],
          ["ie", 113],
          ["kp", 114],
          ["kr", 115],
          ["gy", 116],
          ["hn", 117],
          ["mm", 118],
          ["ga", 119],
          ["gq", 120],
          ["ni", 121],
          ["lv", 122],
          ["ug", 123],
          ["mw", 124],
          ["am", 125],
          ["sx", 126],
          ["tm", 127],
          ["zm", 128],
          ["nc", 129],
          ["mr", 130],
          ["dz", 131],
          ["lt", 132],
          ["et", 133],
          ["er", 134],
          ["gh", 135],
          ["si", 136],
          ["gt", 137],
          ["ba", 138],
          ["jo", 139],
          ["sy", 140],
          ["mc", 141],
          ["al", 142],
          ["uy", 143],
          ["cnm", 144],
          ["mn", 145],
          ["rw", 146],
          ["so", 147],
          ["bo", 148],
          ["cm", 149],
          ["cg", 150],
          ["eh", 151],
          ["rs", 152],
          ["me", 153],
          ["tg", 154],
          ["la", 155],
          ["af", 156],
          ["ua", 157],
          ["sk", 158],
          ["jk", 159],
          ["bg", 160],
          ["qa", 161],
          ["li", 162],
          ["at", 163],
          ["sz", 164],
          ["hu", 165],
          ["ro", 166],
          ["ne", 167],
          ["lu", 168],
          ["ad", 169],
          ["ci", 170],
          ["lr", 171],
          ["bn", 172],
          ["iq", 173],
          ["ge", 174],
          ["gm", 175],
          ["ch", 176],
          ["td", 177],
          ["kv", 178],
          ["lb", 179],
          ["dj", 180],
          ["bi", 181],
          ["sr", 182],
          ["il", 183],
          ["ml", 184],
          ["sn", 185],
          ["gn", 186],
          ["zw", 187],
          ["pl", 188],
          ["mk", 189],
          ["py", 190],
          ["by", 191],
          ["cz", 192],
          ["bf", 193],
          ["na", 194],
          ["ly", 195],
          ["tn", 196],
          ["bt", 197],
          ["md", 198],
          ["ss", 199],
          ["bw", 200],
          ["bs", 201],
          ["nz", 202],
          ["cu", 203],
          ["ec", 204],
          ["au", 205],
          ["ve", 206],
          ["sb", 207],
          ["mg", 208],
          ["is", 209],
          ["eg", 210],
          ["kg", 211],
          ["np", 212]
        ]
      }
    ]
  };

  ngOnInit(): void {
  }

}

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
  // Bar Chart
  public barChartLabels: Label[] = ["Africa", "Asia", "Europe", "Latin America", "North America"];
  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
      labels: {
        fontColor: "#A8A9AD",
      }
    },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050',
      fontColor: "#A8A9AD",
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#A8A9AD",
        }

      }],
      xAxes: [{
        ticks: {
          fontColor: "#A8A9AD",
        }
      }]
    }
  }
  public barChartData: ChartDataSets[] = [
    {
      label: "Population (millions)",
      backgroundColor: ["#ff0018", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
      data: [2478, 5267, 1734, 3384, 1433]
    }
  ];
  // Line Chart
  public LineChartLabels: Label[] = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
  public LineChartType: ChartType = 'line';
  public LineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
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
          fontColor: "#A8A9AD"
        }
      }]
    }
  }
  public LineChartData: ChartDataSets[] = [
    {
      label: "Data",
      borderColor: '#ff0018',
      pointBorderColor: '#ff0018',
      pointBackgroundColor: '#ff0018',
      pointHoverBackgroundColor: '#ff0018',
      pointHoverBorderColor: '#ff0018',
      pointBorderWidth: 1,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 2,
      fill: true,
      backgroundColor: "rgba(53,127,250,0.4)",
      borderWidth: 1,
      data: [1800, 1600, 2300, 2800, 3600, 2900, 3000, 3800, 3600]
    }
  ];
  // Pie Chart
  public PieChartLabels: Label[] = ["Hunger House", "Food Lounge", "Delizious", "Red Resturant", "Hunger Lounge"];
  public PieChartType: ChartType = 'pie';
  public PieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "#A8A9AD"
      }
    },
    title: {
      display: true,
      text: 'Predicted Resturant Ratings (millions) in 2050',
      fontColor: "#A8A9AD"
    }
  }
  public PieChartData: ChartDataSets[] = [
    {
      label: "Population (millions)",
      backgroundColor: ["#ff0018", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
      data: [2478, 5267, 734, 784, 433]
    }
  ];
  // Polar Chart
  public PolarChartLabels: Label[] = ["Africa", "Asia", "Europe", "Latin America", "North America"];
  public PolarChartType: ChartType = 'polarArea';
  public PolarChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "#A8A9AD"
      }
    },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050',
      fontColor: "#A8A9AD"
    }
  }
  public PolarChartData: ChartDataSets[] = [
    {
      label: "Population (millions)",
      backgroundColor: ["#ff0018", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
      data: [2478, 5267, 734, 784, 433]
    }
  ];
  // Dougnut Chart
  public DougnutChartLabels: Label[] = ["Africa", "Asia", "Europe", "Latin America", "North America"];
  public DougnutChartType: ChartType = 'doughnut';
  public DougnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "#A8A9AD"
      }
    },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050',
      fontColor: "#A8A9AD"
    }
  }
  public DougnutChartData: ChartDataSets[] = [
    {
      label: "Population (millions)",
      backgroundColor: ["#ff0018", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
      data: [2478, 5267, 734, 784, 433]
    }
  ];
  // Groupbar Chart
  public groupChartLabels: Label[] = ["1900", "1950", "1999", "2050"];
  public groupChartType: ChartType = 'bar';
  public groupChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "#A8A9AD"
      }
    },
    title: {
      display: true,
      text: 'Population growth (millions)',
      fontColor: "#A8A9AD"
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#A8A9AD",
        }

      }],
      xAxes: [{
        ticks: {
          fontColor: "#A8A9AD",
        }
      }]
    }
  }
  public groupChartData: ChartDataSets[] = [
    {
      label: "Africa",
      backgroundColor: "#3e95cd",
      data: [133, 221, 783, 2478]
    }, {
      label: "Europe",
      backgroundColor: "#8e5ea2",
      data: [408, 547, 675, 734]
    }
  ];
  // Mixed Chart
  public MixedChartLabels: Label[] = ["1900", "1950", "1999", "2050"];
  public MixedChartType: ChartType = 'bar';
  public MixedChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Population growth (millions): Europe & Africa',
      fontColor: "#A8A9AD"
    },
    legend: { display: false },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#A8A9AD"
        }

      }],
      xAxes: [{
        ticks: {
          fontColor: "#A8A9AD"
        }
      }]
    }
  }
  public MixedChartData: ChartDataSets[] = [
    {
      label: "Europe",
      type: "line",
      borderColor: "#8e5ea2",
      data: [408, 547, 675, 734],
      fill: false
    }, {
      label: "Africa",
      type: "line",
      borderColor: "#3e95cd",
      data: [133, 221, 783, 2478],
      fill: false
    }, {
      label: "Europe",
      type: "bar",
      backgroundColor: "#ff6c60",
      data: [408, 547, 675, 734],
    }, {
      label: "Africa",
      type: "bar",
      backgroundColor: "#f7b11b",
      data: [133, 221, 783, 2478]
    }
  ];

  ngOnInit(): void {
  }

}

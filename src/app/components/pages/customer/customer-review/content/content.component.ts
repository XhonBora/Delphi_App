import { Component, OnInit } from '@angular/core';
import data from '../../../../../data/customerreview.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public customerreview = data;

  ngOnInit(): void {
  }

}

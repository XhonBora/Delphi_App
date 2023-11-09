import { Component, OnInit } from '@angular/core';
import data from '../../../../../data/menu.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // pagination
  page: number = 1;
  public product = data;

  ngOnInit(): void {
  }

}

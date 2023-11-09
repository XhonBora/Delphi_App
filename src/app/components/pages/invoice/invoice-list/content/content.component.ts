import { Component, OnInit } from '@angular/core';
import data from '../../../../../data/invoicelist.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public invoicelist = data;

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import catelogue from '../../../../../data/catelogue.json'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public catelogue = catelogue;

  ngOnInit(): void {
  }

}

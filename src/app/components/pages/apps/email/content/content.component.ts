import { Component, OnInit } from '@angular/core';
import email from '../../../../../data/emaillist.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public emailpost: { img: string, pinned: boolean }[] = email;
  pinnedBtn(item: { pinned: boolean; }) {
    item.pinned == true ? item.pinned = false : item.pinned = true;
  };
  ngOnInit(): void {
  }

}

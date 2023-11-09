import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
  selectedAnimation: string = 'bounce';
  animatedClass : string = 'animated';
  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedAnimation = event.target.value;
    this.animatedClass = "animated";
    setTimeout(() => {
      this.animatedClass = "";
      this.selectedAnimation = "";
    }, 3000);
  }

  ngOnInit(): void {
  }

}

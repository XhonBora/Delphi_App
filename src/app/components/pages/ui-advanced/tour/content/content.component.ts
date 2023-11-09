import { Component, OnInit } from '@angular/core';
import { TourService } from 'ngx-tour-ngx-popper';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public tourService: TourService) {
  }

  ngOnInit() {
    this.tourService.initialize([
      {
        anchorId: 'step-1',
        title: 'Popover Positioning',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        placement: 'right'
      },
      {
        anchorId: 'step-2',
        title: 'This is an italicized Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        placement: 'bottom'
      },
      {
        anchorId: 'step-3',
        title: 'Popover with Image',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        placement: 'top'
      },
      {
        anchorId: 'step-4',
        title: 'Keyboard control',
        content: 'Move with left and right, and close with ESC',
        placement: 'left'
      },
      {
        anchorId: 'step-5',
        title: 'This Concludes it ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        placement: 'top'
      }
    ]);
    this.tourService.start();
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
  openmin(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-min' });
  }
  openmax(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-max' });
  }

  ngOnInit(): void {
  }

}

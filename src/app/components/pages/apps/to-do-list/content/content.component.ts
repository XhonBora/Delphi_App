import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import todolist from '../../../../../data/todolist.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // Task modal
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content: any, index: number) {
    this.lastActiveBox = index;
    this.modalService.open(content, { centered: true, windowClass: 'on-load-modal' });
  }
  public taskbox = todolist;
  // Add taskBlock
  taskBlock: string;
  onClick() {
    if (this.taskBlock == '' || this.taskBlock == undefined || this.taskBlock == null) return;
    this.taskbox.unshift({ maintitle: this.taskBlock, tasklist: [] });
    this.taskBlock = '';
  }
  // Add task
  taks: string;
  lastActiveBox: number;
  onClickTask() {
    if (this.taks == '' || this.taks == undefined || this.taks == null) return;
    this.taskbox[this.lastActiveBox].tasklist.push({ title: this.taks, state: false });
    this.taks = '';
  }
  removeItem(item: number): void {
    if (window.confirm("Are you sure you want to delete this task box?")) {
      this.taskbox.splice(item, 1);
    }
  }
  removeTask(i: number): void {
    if (window.confirm("Are you sure you want to delete this task?")) {
      this.taskbox[i].tasklist.splice(i, 1);
    }
  }
  taskComplete(task: { state: boolean; }) {
    task.state == true ? task.state = false : task.state = true;
  }

  ngOnInit(): void {
  }

}

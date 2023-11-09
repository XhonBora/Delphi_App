import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  // Reminder modal
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'on-load-modal' });
  }
  reminders = [
    {
      title: 'Developer Meeting in Block B',
      date: 'Today',
      time: '3:45 pm',
    },
    {
      title: 'Start adding change log to version 2',
      date: 'Tomorrow',
      time: '12:00 pm',
    }
  ];
  // Add Reminder
  reminderTitle: string;
  reminderDate: string;
  reminderTime: string;
  onClick() {
    if (this.reminderTitle == '' || this.reminderTitle == undefined || this.reminderTitle == null) return;
    this.reminders.unshift({
      title: this.reminderTitle,
      date: this.reminderDate,
      time: this.reminderTime,
    });
    this.reminderTitle = '';
    this.reminderDate = '';
    this.reminderTime = '';
  }
  removeItem(item: number): void {
    if (window.confirm("Are you sure you want to delete this Reminder?")) {
      this.reminders.splice(item, 1);
    }
  }

  ngOnInit(): void {
  }

}

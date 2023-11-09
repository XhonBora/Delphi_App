import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import notes from '../../../../data/notes.json';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  // Notes modal
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  open(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'on-load-modal' });
  }
  public notespost = notes;
  // Add Note
  noteTitle: string;
  noteDesc: string;
  onClick() {
    if( this.noteTitle == '' || this.noteTitle == undefined || this.noteTitle == null) return;
    this.notespost.unshift({
      title: this.noteTitle,
      text: this.noteDesc,
      shareuser: [],
      members: []
    });
    this.noteTitle = '';
    this.noteDesc = '';
  }
  removeItem(item: number): void {
    if (window.confirm("Are you sure you want to delete this Note?")) {
      this.notespost.splice(item, 1);
    }
  }

  ngOnInit(): void {
  }

}

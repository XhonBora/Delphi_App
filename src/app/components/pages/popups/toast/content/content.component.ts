import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private toast: ToastrService) { }
  toastsuccess() {
    this.toast.remove;
    this.toast.success('This is a Success Toast', 'lorem ipsum asit', {
      positionClass: 'toast-top-left',
      progressBar: true
    });
  }
  toastdanger() {
    this.toast.remove;
    this.toast.error('This is a Danger Toast', 'lorem ipsum asit', {
      positionClass: 'toast-top-right',
      progressBar: true
    });
  }
  toastwarning() {
    this.toast.remove;
    this.toast.warning('This is a Warning Toast', 'lorem ipsum asit', {
      positionClass: 'toast-bottom-left',
      progressBar: true
    });
  }
  toastinfo() {
    this.toast.remove;
    this.toast.info('This is an Info Toast', 'lorem ipsum asit', {
      positionClass: 'toast-bottom-right',
      progressBar: true
    });
  }
  submit() {
    this.toast.info('This is an Info Toast', 'lorem ipsum asit', {
      positionClass: 'toast-bottom-right',
      progressBar: true
    });
  }
  close() {
    this.toast.remove;
  }
  toastTitle: string = '';
  toasttitle(event: any) {
    this.toastTitle = event.target.value;
  }

  toastMessage: string = '';
  toastmessage(event: any) {
    this.toastMessage = event.target.value;
  }

  toasttype: string = 'success';
  toastType(event: any) {
    this.toasttype = event.target.value;
  }

  toastposition: string = 'toast-top-left';
  toastPosition(event: any) {
    this.toastposition = event.target.value;
  }

  closebutton: string = 'false';
  closeButton(event: any) {
    this.closebutton = event.target.value;
  }

  progressbar: string = 'false';
  progressBar(event: any) {
    this.progressbar = event.target.value;
  }

  preventduplicates: string = 'false';
  preventDuplicates(event: any) {
    this.preventduplicates = event.target.value;
  }

  debug: string = 'false';
  Debug(event: any) {
    this.debug = event.target.value;
  }

  ngOnInit(): void {
  }

}

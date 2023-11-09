import { Component, OnInit, ViewChild } from '@angular/core';
import { SweetAlertOptions } from 'sweetalert2';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  @ViewChild('successSwal') public successSwal: SwalComponent;
  Step1: SweetAlertOptions = {
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  };
  // Opciones del Swal exitoso
  Step2: SweetAlertOptions = {
    title: 'Deleted!',
    icon: 'success',
    text: 'Your file has been deleted.'
  };
  deleteQuestion() {
   
  };
  ngOnInit(): void {
  }

}

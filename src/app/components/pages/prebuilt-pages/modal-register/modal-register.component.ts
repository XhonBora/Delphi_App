import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {

  closeResult: string;
  @ViewChild('content') content: any;
  constructor(private modalService: NgbModal) { }

  ngAfterViewInit() {
    this.openModal();
  }
  openModal() { 
    this.modalService.open(this.content, { centered: true, windowClass: 'modal-auth' });
  }
  // SLider
  sliderData = [
    {
      title:"Welcome Back!",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper ligula, nec scelerisque eros. Curabitur vitae erat ac eros accumsan commodo."
    },
    {
      title:"Welcome Back!",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper ligula, nec scelerisque eros. Curabitur vitae erat ac eros accumsan commodo."
    },
    {
      title:"Welcome Back!",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper ligula, nec scelerisque eros. Curabitur vitae erat ac eros accumsan commodo."
    }
  ]
  signupForm: FormGroup;

  ngOnInit(): void {
    // Signup Form
    this.signupForm = new FormGroup({
      Firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      Lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }

}

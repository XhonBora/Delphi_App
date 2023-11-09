import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  signupForm: FormGroup;

  constructor() { }

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

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  defaultForm: FormGroup;
  ngOnInit(): void {
    // Default Form
    this.defaultForm = new FormGroup({
      Firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      Lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      Username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      City: new FormControl('', [
        Validators.required
      ]),
      State: new FormControl('', [
        Validators.required
      ]),
      Zipcode: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ])
    });
  }
  onSubmit() {
    console.log(this.defaultForm);
  }

}

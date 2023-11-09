import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor() { }
  signupForm: FormGroup;
  loginForm: FormGroup;
  contactForm: FormGroup;
  paymentForm: FormGroup;
  checkoutForm: FormGroup;
  subscribeForm: FormGroup;
  forgotpasswordForm: FormGroup;

  ngOnInit() {
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
    // Login Form
    this.loginForm = new FormGroup({
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
    // Contact form
    this.contactForm = new FormGroup({
      Fullname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Message: new FormControl('', [
        Validators.required
      ])
    });
    // Payment Form
    this.paymentForm = new FormGroup({
      Cardholdername: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      Cardnumber: new FormControl('', [
        Validators.required
      ]),
      Month: new FormControl('', [
        Validators.required
      ]),
      Year: new FormControl('', [
        Validators.required
      ]),
      Cvv: new FormControl('', [
        Validators.required
      ])
    });
    // Checkout Form
    this.checkoutForm = new FormGroup({
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
      Phone: new FormControl('', [
        Validators.required
      ]),
      Country: new FormControl('', [
        Validators.required
      ]),
      State: new FormControl('', [
        Validators.required
      ]),
      City: new FormControl('', [
        Validators.required
      ]),
      Zipcode: new FormControl('', [
        Validators.required
      ]),
      Address: new FormControl('', [
        Validators.required
      ])
    });
    // Subscribe Form
    this.subscribeForm = new FormGroup({
      Fullname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ])
    });
    // Forgot password Form
    this.forgotpasswordForm = new FormGroup({
      Username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}

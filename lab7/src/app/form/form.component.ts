import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  signUpForm = this.formBuilder.group({
    name:  new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    money: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  isFormPostError: boolean = false;
  isFormSent: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {}

  validateInputs(e: Event) {
    e.preventDefault();

    if (this.signUpForm.valid) {
      console.log('Form was sent:', this.signUpForm.value);
      this.isFormPostError = false;
      this.isFormSent = true;
    } else {
      this.isFormPostError = true;
    }

    this.clearInputs();
  }

  clearInputs() {
    this.signUpForm.reset();
  }
}

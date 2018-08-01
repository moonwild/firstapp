import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regist-form',
  templateUrl: './regist-form.component.html',
  styleUrls: ['./regist-form.component.css']
})
export class RegistFormComponent implements OnInit {

  public registForm: FormGroup;
  public reg: any;
  public login: any;
  public password: any;
  public email: any;

  constructor(private fb: FormBuilder) {

    this.registForm = fb.group({
      login: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]+$'),
        Validators.minLength(5)])],
      email: [null, Validators.compose([
        Validators.required,
        Validators.email])
      ],
      password: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),

      ])],
    })

  }

  ngOnInit() {
  }


}

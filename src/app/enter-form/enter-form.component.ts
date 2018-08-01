import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersdataService } from '../usersdata.service';

import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-enter-form',
  templateUrl: './enter-form.component.html',
  styleUrls: ['./enter-form.component.css']
})
export class EnterFormComponent implements OnInit {


  public rForm: FormGroup;
  public password: any;
  public name: string = '';

  //Материал таблица
  public users: Object;
  columnsToDisplay = ['user.id', 'user.name', 'user.email', 'user.website'];
  dataSourse = this.users;

  constructor(private fb: FormBuilder, private data: UsersdataService) {

    this.rForm = fb.group({
      name: [null, Validators.compose([
        Validators.required
        ])],
      password: [null, Validators.compose([
        Validators.required
        ])
      ],

    });



  }



  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users = data
    )

  }


}


import { Component, OnInit } from '@angular/core';
import { BookoramaService } from './bookorama.service';
//import { FormGroup, FormControl } from '../../node_modules/@angular/forms';
//import { FormGroup, FormControl} from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  public books = [];

  constructor(private _bookorama: BookoramaService){

  }

  ngOnInit(){
    this.books = this. _bookorama. getListBooks();
  }

}



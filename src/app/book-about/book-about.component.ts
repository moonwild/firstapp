import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookoramaService } from '../bookorama.service';

@Component({
  selector: 'app-book-about',
  templateUrl: './book-about.component.html',
  styleUrls: ['./book-about.component.css']
})
export class BookAboutComponent implements OnInit {
  public allBooks = [];


  constructor(private _router: Router, private _bookorama1: BookoramaService) { }

  ngOnInit() {
    this.allBooks = this._bookorama1.getListBooks();
  }

  onSelect() {

  }

}

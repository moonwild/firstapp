import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { bookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book

  constructor(private _currentRoute: ActivatedRoute, private _service: bookService) { }

  ngOnInit() {
    let id: number = +this._currentRoute.snapshot.paramMap.get("id");
    this.book = this._service.getById(id);
  }

}

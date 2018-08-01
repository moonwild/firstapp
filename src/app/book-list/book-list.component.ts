import { Component, OnInit } from '@angular/core';
import { bookService } from '../shared/book.service';
import { Book } from '../shared/book.model';
import { Router } from '../../../node_modules/@angular/router';





@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books = [];
  public booksNew: Book[] = [];

  bookList = new Book(null, '', '', false);


  constructor(private _bookservice: bookService, private _router: Router) { }

  ngOnInit() {
    this.booksNew = this._bookservice.getAll();
  };

  onCreate(book: Book) {
    this.booksNew.push(this.bookList);
  }

  onEdit(book: Book) {
    this._router.navigate(["book", "edit", book.id]);
  }

  onDelete(i) {
    this.booksNew.splice(i, 1);
  }


}





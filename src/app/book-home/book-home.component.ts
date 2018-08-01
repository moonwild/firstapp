import { Component, OnInit } from '@angular/core';



export class FavBook {
  constructor(
    public title: string = '',
    public author: string = '',
    public year: number) { }
}


@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.css']
})
export class BookHomeComponent implements OnInit {

  public countBook: number;

  public years = [1900, 1950, 2000, 2050, 8080];

  bookModel = new FavBook('"Мастер и Маргарита"', 'М. Булгаков', 1966);
  books: FavBook[] = [];

  addBook(title: string, author: string, year: number) {
    this.books.push(new FavBook(title, author, year));
    this.countBook = this.books.length;
    console.log(this.books);
  }

  deliteBook(i: number) {
    this.books.splice(i, 1);
    this.countBook = this.books.length;
  }

  public search = '';
  public xy: FavBook;


  onSearch() {
    this.xy = this.books.find(x => x.title === this.search);
    return this.xy;
  }

  constructor() {

  }

  ngOnInit() {

  }


}



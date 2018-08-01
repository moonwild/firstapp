import { Injectable } from '@angular/core';
import { Book } from './book.model';



@Injectable()


export class bookService {

    data: Book[] = [
        new Book(1, 'Джон Р. Р. Толкин', '"Властелин колец"', false),
        new Book(2, 'Джейн Остин', '"Гордость и предубеждение"', false),
        new Book(3, 'Филип Пулман', '"Тёмные начала"', false),
        new Book(4, 'Дуглас Адамс', '"Автостопом по галактике"', false),
        new Book(5, 'Джоан Роулинг', '"Гарри Поттер и Кубок огня"', false),
        new Book(6, 'Харпер Ли', '"Убить пересмешника"', false),
        new Book(7, 'Алан Александр Милн', '"Винни Пух"', false),
        new Book(8, 'Джордж Оруэлл', '"1984"', false),
        new Book(9, 'Клайв Стэйплз Льюис', '"Лев, колдунья и платяной шкаф"', false),
        new Book(10, 'Шарлотта Бронте', '"Джейн Эйр"', false),
    ];

    getAll(): Book[] {
        return this.data;
    }

    getById(id: number): Book {
        return this.data.find(x => x.id == id);
    }

    update(book: Book) {
        let toUpdate = this.getById(book.id);
        Object.assign(toUpdate, book);
    }

    delite(book: Book) {
        let toDelite = this.getById(book.id);
        this.data.splice(this.data.indexOf(book), 1);
    }

}
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookoramaService {

  constructor() { }

  getListBooks() {
    return [
      { id: 1, author: 'Джон Р. Р. Толкин', book: '"Властелин колец"' },
      { id: 2, author: 'Джейн Остин', book: '"Гордость и предубеждение"' },
      { id: 3, author: 'Филип Пулман', book: '"Тёмные начала"' },
      { id: 4, author: 'Дуглас Адамс', book: '"Автостопом по галактике"' },
      { id: 5, author: 'Джоан Роулинг', book: '"Гарри Поттер и Кубок огня"' },
      { id: 6, author: 'Харпер Ли', book: '"Убить пересмешника"' },
      { id: 7, author: 'Алан Александр Милн', book: '"Винни Пух"' },
      { id: 8, author: 'Джордж Оруэлл', book: '"1984"' },
      { id: 9, author: 'Клайв Стэйплз Льюис', book: '"Лев, колдунья и платяной шкаф"' },
      { id: 10, author: 'Шарлотта Бронте', book: '"Джейн Эйр"' },
    ];
  }

  addBook() {

  }
}

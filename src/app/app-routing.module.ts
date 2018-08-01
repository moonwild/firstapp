import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookAboutComponent } from './book-about/book-about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookHomeComponent } from './book-home/book-home.component';

import { BookEditComponent } from './book-edit/book-edit.component';
import { EnterFormComponent } from './enter-form/enter-form.component';
import { RegistFormComponent } from './regist-form/regist-form.component';
//Добавлен новый компонент
import { EfDetailsComponent } from './ef-details/ef-details.component';


const routes: Routes = [
    { path: '', component: BookHomeComponent },
    { path: 'book-home', component: BookHomeComponent },
    { path: 'book-list', component: BookListComponent },
    { path: 'enter-form', component: EnterFormComponent },
    { path: 'regist-form', component: RegistFormComponent },
    { path: 'book-about', component: BookAboutComponent },
    { path: 'book/edit/:id', component: BookEditComponent },
    //Добавлен новый компонент
    { path: 'ef-details/:id', component: EfDetailsComponent },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//Добавлен
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';



import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';



import { ReactiveFormsModule, FormsModule } from '../../node_modules/@angular/forms';


import { BookoramaService } from './bookorama.service';
import { BookHomeComponent } from './book-home/book-home.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookAboutComponent } from './book-about/book-about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { bookService } from './shared/book.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { EnterFormComponent } from './enter-form/enter-form.component';
import { RegistFormComponent } from './regist-form/regist-form.component';
import { EfDetailsComponent } from './ef-details/ef-details.component';




@NgModule({
  declarations: [
    AppComponent,
    BookHomeComponent,
    BookListComponent,
    BookAboutComponent,
    PageNotFoundComponent,
    BookEditComponent,
    EnterFormComponent,
    RegistFormComponent,
    EfDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    //Добавлен
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule

  ],
  providers: [BookoramaService, bookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

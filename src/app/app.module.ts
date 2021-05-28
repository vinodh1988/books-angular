import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookDisplayComponent } from './pages/home/book-display/book-display.component';
import {HttpClientModule} from '@angular/common/http';
import { BookContentComponent } from './pages/home/book-content/book-content.component'
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from './pipes/discount.pipe';
import { FilterbooksPipe } from './pipes/filterbooks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BookDisplayComponent,
    BookContentComponent,
    DiscountPipe,
    FilterbooksPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

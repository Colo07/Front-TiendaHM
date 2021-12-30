import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { CardsComponent } from './components/cards/cards.component';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/aboutUs/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    DetailsComponent,
    SearchfieldComponent,
    CardsComponent,
    ContactComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


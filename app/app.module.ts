import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LifstyleComponent } from './lifstyle/lifstyle.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [AppComponent, HomeComponent, NewsComponent, LifstyleComponent, AboutComponent, ContactComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

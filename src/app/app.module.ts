import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PicturesComponent } from './pages/pictures/pictures.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PictureCardComponent } from './components/picture-card/picture-card.component';
import { PictureDetailsComponent } from './pages/picture-details/picture-details.component'

@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    PagenotfoundComponent,
    PictureCardComponent,
    PictureDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

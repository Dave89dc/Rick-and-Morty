import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { EpisodesPageComponent } from './components/episodes-page/episodes-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LocationsPageComponent,
    CharactersPageComponent,
    EpisodesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

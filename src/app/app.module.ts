import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { EpisodesPageComponent } from './components/episodes-page/episodes-page.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsPageComponent,
    CharactersPageComponent,
    EpisodesPageComponent,
    HeaderComponent,
    FooterComponent,
    CharacterCardComponent,
    LocationCardComponent,
    EpisodeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

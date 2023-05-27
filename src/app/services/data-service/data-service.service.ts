import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { Character } from 'src/app/models/character/character';
import { Episode } from 'src/app/models/episode/episode';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  readonly RICK_AND_MORTY_URL = 'https://rickandmortyapi.com/api';
  readonly CHARACTERS_URL = 'https://rickandmortyapi.com/api/character/?page=';
  readonly LOCATIONS_URL = 'https://rickandmortyapi.com/api/location/?page=';
  readonly EPISODES_URL = 'https://rickandmortyapi.com/api/episode/?page=';

  constructor(private http: HttpClient) { }

  getCharacters(charactersPage: number): Observable<Character[]>{
    return this.http.get<any>(this.CHARACTERS_URL + charactersPage).pipe(
      switchMap(characters => {
        const results = characters.results
        const getArray = [];
        getArray.push(results)
        return getArray;
      })
    )
  }

  getLocations(locationsPage: number): Observable<Location[]>{
    return this.http.get<any>(this.LOCATIONS_URL + locationsPage).pipe(
      switchMap(locations => {
        const results = locations.results;
        const getArray = [];
        getArray.push(results)
        return getArray;
      })
    )
  }

  getEpisodes(episodesPage: number): Observable<Episode[]>{
    return this.http.get<any>(this.EPISODES_URL + episodesPage).pipe(
      switchMap(episodes => {
        const results = episodes.results;
        const getArray = [];
        getArray.push(results)
        return getArray;
      })
    )
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap, tap } from 'rxjs';
import { Character } from 'src/app/models/character/character';
import { Episode } from 'src/app/models/episode/episode';
import { Location } from 'src/app/models/location/location';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  readonly RICK_AND_MORTY_URL = 'https://rickandmortyapi.com/api';
  readonly CHARACTERS_URL = 'https://rickandmortyapi.com/api/character/';
  readonly LOCATIONS_URL = 'https://rickandmortyapi.com/api/location/';
  readonly EPISODES_URL = 'https://rickandmortyapi.com/api/episode/';

  constructor(private http: HttpClient) { }

  getCharacters(charactersPage: number): Observable<Character[]>{
    return this.http.get<any>(this.CHARACTERS_URL + '?page=' + charactersPage).pipe(
      switchMap(characters => {
        const results = characters.results
        const getArray = [];
        getArray.push(results)
        return getArray;
      })
    )
  }

  getLocations(locationsPage: number): Observable<Location[]>{
    return this.http.get<any>(this.LOCATIONS_URL + '?page=' + locationsPage).pipe(
      switchMap(locations => {
        const results = locations.results;
        const getArray = [];
        getArray.push(results)
        return getArray;
      })
    )
  }

  getResidents(id: number): Observable<Character[]>{
    return this.http.get<any>(this.LOCATIONS_URL + id).pipe(
      switchMap(location => {
        const residentsUrl = location.residents;
        const getArray = [];
        for (const resident of residentsUrl){
          const request = this.http.get<Character>(resident);
          getArray.push(request);
        }
        return forkJoin(getArray);
      })
    )

  }

  // getResidents(locationsPage: number): Observable<Character[]>{
  //   return this.http.get<any>(this.LOCATIONS_URL + '?page=' + locationsPage).pipe(
  //     switchMap(location => {
  //       const locationsObject = location.results;
  //       const getArray = [];
  //       for (const location of locationsObject){
  //         const residentsUrl = location.residents;
  //         console.log(residentsUrl)
  //         const request = residentsUrl.map((residentUrl: string) => this.http.get<Character>(residentUrl));
  //         getArray.push(...request);
  //       }
  //       return forkJoin(getArray);
  //     })
  //   )
  // }

  getEpisodes(episodesPage: number): Observable<Episode[]>{
    return this.http.get<any>(this.EPISODES_URL + '?page=' + episodesPage).pipe(
      switchMap(episodes => {
        const results = episodes.results;
        const getArray = [];
        getArray.push(results)
        return getArray;
      })
    )
  }

  getCharactersFromEpisode(id: number): Observable<Character[]>{
    return this.http.get<any>(this.EPISODES_URL + id).pipe(
      switchMap(episode => {
        const charactersUrl = episode.characters;
        const getArray = [];
        for (const character of charactersUrl){
          const request = this.http.get<Character>(character);
          getArray.push(request);
        }
        return forkJoin(getArray);
      })
    )

  }

}

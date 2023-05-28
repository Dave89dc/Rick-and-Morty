import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode/episode';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/models/character/character';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.scss']
})
export class EpisodesPageComponent implements OnInit {

  episodes: Episode[] = [];
  characters: Character[] = []
  page: number = 1;
  id: number = 1;

  constructor(private dataService: DataServiceService, config: NgbPaginationConfig){
    this.loadEpisodes();
    //this.loadCharacters();
    config.size = 'sm';
		config.boundaryLinks = true;
  }

  ngOnInit(){
    this.loadEpisodes();
  }

  loadEpisodes(){
    this.dataService.getEpisodes(this.page).subscribe({
      next: episodes => this.episodes = episodes,
      error: err => console.log('Error: ', err)
    });
  }

  // loadCharacters(){
  //   this.dataService.getCharactersFromEpisode(this.id).subscribe({
  //     next: characters => {
  //       const nameArray = [];
  //       for (const character of characters) {
  //         const name = character.name;
  //         nameArray.push(name);
  //       }
  //       console.log(nameArray.join(', '));
  //     },
  //     error: err => console.log('Error: ', err)
  //   });
  // }

}

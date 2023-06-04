import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character/character';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
  providers: [NgbPaginationConfig]
})
export class CharactersPageComponent implements OnInit {

  characters: Character[] = [];
  page: number = 1;

  constructor(private dataService: DataServiceService, config: NgbPaginationConfig){
    this.loadCharacters();
    config.size = 'sm';
		config.boundaryLinks = true;
  }

  ngOnInit(){
    this.loadCharacters();
  }

  loadCharacters(){
    this.dataService.getCharacters(this.page).subscribe({
      next: characters => this.characters = characters,
      error: err => console.log('Error: ', err)
    });
  }

  

}

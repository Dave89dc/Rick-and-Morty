import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode/episode';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.scss']
})
export class EpisodesPageComponent implements OnInit {

  episodes: Episode[] = [];
  page: number = 1;

  constructor(private dataService: DataServiceService, config: NgbPaginationConfig){
    this.loadEpisodes();
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

}

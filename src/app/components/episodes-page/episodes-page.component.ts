import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.scss']
})
export class EpisodesPageComponent {

  episodesPage: number = 1;

  constructor(private dataService: DataServiceService){

    dataService.getEpisodes(this.episodesPage).subscribe({
      next: episodes => console.log(episodes),
      error: err => console.log('Error: ', err)
    });

  }

}

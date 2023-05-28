import { Component, Input } from '@angular/core';
import { Episode } from '../../models/episode/episode';
import { DataServiceService } from '../../services/data-service/data-service.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent {

  // id: number = 1;

  @Input() episode?: Episode;

  constructor(private dataService: DataServiceService, config: NgbModalConfig, private modalService: NgbModal){
  }

  open(content: any) {
		this.modalService.open(content);
  }

  loadCharacters(id: number){
    this.dataService.getCharactersFromEpisode(id).subscribe({
      next: characters => {
        const nameArray = [];
        for (const character of characters) {
          const name = character.name;
          nameArray.push(name);
        }
        return nameArray.join(', ');
      },
      error: err => console.log('Error: ', err)
    });
  }

}

import { Component, Input } from '@angular/core';
import { Episode } from '../models/episode/episode';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent {

  @Input() episode?: Episode;

}

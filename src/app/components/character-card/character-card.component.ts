import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

  @Input() character?: Character;

  getCharacterStatusColor(status: string): string {
    if (status === 'Alive') {
      return 'green';
    } else if (status === 'Dead') {
      return 'red';
    } else {
      return 'black';
    }
  }

}

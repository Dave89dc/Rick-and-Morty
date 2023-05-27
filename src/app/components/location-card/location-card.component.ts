import { Component, Input } from '@angular/core';
import { Location } from 'src/app/models/location/location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent {

  @Input() location?: Location;

}

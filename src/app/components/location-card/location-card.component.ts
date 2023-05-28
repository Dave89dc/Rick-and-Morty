import { Component, Input } from '@angular/core';
import { Location } from 'src/app/models/location/location';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent {

  @Input() location?: Location;
  residents: string = '';
  id: number = 1;

  constructor(private dataService: DataServiceService){
    this.loadResidents(this.id);
  }

  loadResidents(id: number){
    this.dataService.getResidents(id).subscribe({
      next: residents => {
        const nameArray = [];
        for (const resident of residents) {
          const name = resident.name;
          nameArray.push(name);
        }
        console.log(nameArray);
        this.residents = nameArray.join(', ');
      },
      error: err => console.log('Error: ', err)
    });
  }

}

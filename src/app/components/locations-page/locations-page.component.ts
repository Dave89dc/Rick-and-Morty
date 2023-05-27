import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Location } from 'src/app/models/location/location';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss'],
  providers: [NgbPaginationConfig]
})
export class LocationsPageComponent implements OnInit {

  locations: Location[] = [];
  page: number = 1;

  constructor(private dataService: DataServiceService, config: NgbPaginationConfig){
    this.loadLocations();
    config.size = 'sm';
		config.boundaryLinks = true;
  }

  ngOnInit(){
    this.loadLocations();
  }

  loadLocations(){
    this.dataService.getLocations(this.page).subscribe({
      next: locations => this.locations = locations,
      error: err => console.log('Error: ', err)
    });
  }

}

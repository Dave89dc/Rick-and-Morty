import { Component, Input } from '@angular/core';
import { DataServiceService } from './services/data-service/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rick-and-Morty';

  constructor(private dataService: DataServiceService){}

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLight: boolean = true;

  changeTheme(){
    document.body.classList.toggle("dark-mode");
    this.isLight = !this.isLight;
  }

}

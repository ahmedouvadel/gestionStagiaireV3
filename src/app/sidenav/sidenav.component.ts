import { Component } from '@angular/core';
import { AuthentificaionService } from '../services/authentificaion.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(
    public authService : AuthentificaionService
  ) {}

}

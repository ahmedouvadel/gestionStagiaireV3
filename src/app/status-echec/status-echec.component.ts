import { Component } from '@angular/core';

@Component({
  selector: 'app-status-echec',
  templateUrl: './status-echec.component.html',
  styleUrls: ['./status-echec.component.css']
})
export class StatusEchecComponent {
  currentTab: string = 'details';

  changeTab(tab: string) {
    this.currentTab = tab;
  }
}

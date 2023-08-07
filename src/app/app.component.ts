import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AdmiN Pane Leyout';
  sideBarOpen = true;

  ngOnInit() { }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}

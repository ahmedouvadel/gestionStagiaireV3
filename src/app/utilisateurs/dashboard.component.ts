import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor (
    private route : Router,
  ) {}

  event() {
    this.route.navigate(['Utilisateur/add'])
  }

  ngOnInit(): void {

  }

}

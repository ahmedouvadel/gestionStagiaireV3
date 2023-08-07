import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  event1() {
    this.router.navigate(['home']);
  }
  constructor(
    private router: Router,
  ) {}

  event2(){
    this.router.navigate(['departement'])
  }

  ngOnInit(): void {

  }

}

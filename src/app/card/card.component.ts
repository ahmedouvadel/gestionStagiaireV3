import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  constructor(
    private router: Router,
  ) {}

  event1() {
    this.router.navigate(['stagiaire']);
  }

  event2(){
    this.router.navigate(['departement'])
  }

  event3(){
    this.router.navigate(['direction'])
  }

  event4(){
    this.router.navigate(['service'])
  }
  event5(){
    this.router.navigate(['utilisateurs'])
  }
  event6(){
    this.router.navigate(['Status'])
  }

  ngOnInit(): void {

  }

}

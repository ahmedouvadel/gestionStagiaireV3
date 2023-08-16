import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  constructor(
    private router : Router,
  ) {}

  event(){
    this.router.navigate(['direction/add'])
  }

  ngOnInit(): void {

  }


}

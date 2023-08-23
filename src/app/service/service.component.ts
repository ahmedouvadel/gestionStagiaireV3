import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  // pour Liste les Services
  Service! : Array<any>

  constructor(
    private router : Router,
  ) {}
  /** event pour ajoute un service */

  event(){
    this.router.navigate(['service/add'])
  }

  ngOnInit(): void {

    this.Service = [
      {id : 1, nomService:"Genie Logiciel", nomDepartement:"DSI"},
      {id : 2, nomService:"Reseau informatique", nomDepartement:"DSI"},
      {id : 3, nomService:"SAP", nomDepartement:"DSI"},
      {id : 4, nomService:"D610", nomDepartement:"D600"},
      {id : 5, nomService:"D720", nomDepartement:"D700"},
    ]

  }

}

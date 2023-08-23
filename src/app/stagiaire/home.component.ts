import { Component, OnInit  } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Pour Liste Les Stagiaire

  Stagiaire! : Array<any>

  constructor(
    private router : Router,
  ){}

  event(){
    this.router.navigate(['stagiaire/add'])
  }

  ngOnInit(): void {

    this.Stagiaire =[
      {id: 1, nom:"Ahmedou", prenom:"Vadel", Departement:"DTI",nTelephone: 44223507, Badge:1213 },
      {id: 2, nom:"Ftimetou", prenom:"Meyn", Departement:"DTI",nTelephone: 22566478, Badge:1415 },
      {id: 3, nom:"Mohamed", prenom:"Sidine", Departement:"DTI",nTelephone: 44699878, Badge:1236 },
      {id: 4, nom:"Abdallahi", prenom:"Mohamedou", Departement:"D700",nTelephone: 36547856, Badge:1456 },
      {id: 5, nom:"Mohamed", prenom:"Mahfoud", Departement:"D600",nTelephone: 26547895, Badge:1785 }
    ]

  }



}


import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

constructor(
  private router: Router,
) {}

event(){
  this.router.navigate([''])
}

ngOnInit(): void {

}


}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  /** event pour la toggleSidebar */
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private router : Router,
  ) {}
 /** event Log Out */
  event() {
    this.router.navigate(['login'])
  }

  ngOnInit(): void { }
    toggleSidebar(){
      this.toggleSidebarForMe.emit();

    }


}
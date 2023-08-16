import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private router : Router,
  ) {}

  event() {
    this.router.navigate(['login'])
  }

  ngOnInit(): void { }
    toggleSidebar(){
      this.toggleSidebarForMe.emit();

    }


}

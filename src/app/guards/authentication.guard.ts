import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificaionService } from '../services/authentificaion.service';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationGuard implements CanActivate {
  constructor(
    private authservice: AuthentificaionService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let authenticated = this.authservice.isAuthenticated();
    if (!authenticated) {
      return this.router.createUrlTree(['/']); // Redirect to home page
    } else {
      return true;
    }
  }
}



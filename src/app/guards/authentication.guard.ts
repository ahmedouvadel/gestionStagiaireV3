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
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return true;
    let authenticated = this.authservice.isAuthenticated();
    if (authenticated == false) {
      this.router.navigateByUrl('');
      return false;
    } else {
      return true;
    }
  }
}


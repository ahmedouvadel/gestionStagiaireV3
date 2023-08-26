import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificaionService {

  users: User[] = [];
  authenticatedUser!: User;

  constructor() {
    this.users.push({ username: 'user1', password: 'anuser', roles: ['USER'] });
    this.users.push({ username: 'user2', password: 'anuser', roles: ['USER'] });
    this.users.push({
      username: 'Supervisor',
      password: '09132339Aa',
      roles: ['Ahmed'],
    });
    this.users.push({
      username: 'Admin',
      password: '09132339',
      roles: ['ADMIN'],
    });
  }

  public Login(username: String, password: String): Observable<User> {
    let findUser = this.users.find((us) => us.username == username);

    if (!findUser) return throwError(() => new Error('USERNAME NOT fOUND'));

    if (findUser.password != password)
      return throwError(() => new Error('password incorrect'));

    return of(findUser);
  }

  public authenticateUser(findUser: User): Observable<boolean> {
    this.authenticatedUser = findUser;
    localStorage.setItem(
      'authUser',
      JSON.stringify({
        username: findUser.username,
        role: findUser.roles,
        jwt: 'JWT_TOKEN',
      })
    );
    return of(true);
  }

  public hasRole(role: String): boolean {
    return this.authenticatedUser!.roles.includes(role);
  }

  public isAuthenticated() {
    return this.authenticatedUser!=undefined;
  }

  public logout(): Observable<Boolean> {
    this.authenticatedUser == undefined;
    localStorage.removeItem('authUser');
    return of(true);
  }
}

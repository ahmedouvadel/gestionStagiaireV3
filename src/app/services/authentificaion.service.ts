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
    this.users.push({ id: 1, username: 'user1' , password : '123Aa', roles: ['USER'] });
    this.users.push({ id: 2, username: 'user2', password : '123456789', roles: ['USER']});
    this.users.push({ id: 3, username: 'Supervisor', password : '09132339Aa', roles: ['Supervisor']});
    this.users.push({ id: 4, username: 'Admin' , password : '09132339', roles: ['ADMIN']});


  /**   this.users.push({id:1, username: 'user1', password: '123Aa', roles: ['USER'] });
    this.users.push({id:2, username: 'user2', password: '123456789', roles: ['USER'] });
    this.users.push({id:3, username: 'Supervisor', password: '09132339Aa',roles: ['Supervisor'] });
    this.users.push({id:4, username: 'Admin', password: '09132339',roles: ['ADMIN'] });  */
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

  public hasRole(role: string): boolean {
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

  getAllUsers() : Observable<User[]> {
    return of(this.users);
  }

  //Delete Service
  public deleteUsers(id : number) : Observable<Boolean> {
    this.users= this.users.filter(p=>p.id!=id);
    return of(true)

   }
}

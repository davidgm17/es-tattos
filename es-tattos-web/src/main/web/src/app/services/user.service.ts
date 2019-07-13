import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserServiceModel, User } from '../models/user.model';
import { UserServiceListModel, UserList } from '../models/user.list.model';
import { Observable } from 'rxjs';
import { URLSERVER, CORELINKS } from '../app.config';
import { Meeting } from '../models/meeting.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceModel, UserServiceListModel {
  // getUserByIdUrl = 'http://localhost:3000/users';
  // getUserByIdUrl = 'http://localhost:3000/user/details/';
  getUserByIdUrl = URLSERVER.USER_DETAILS;
  getUsersListUrl = URLSERVER.ARTIST_LIST;
  meetingURL = URLSERVER.MEETING;
  loginURL = URLSERVER.LOGIN;
  registerURL = URLSERVER.USER_LIST;

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(): Observable<UserList[]> {
    // return this.http.get<UserList[]>(this.getUsersListUrl);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<UserList[]>(this.getUsersListUrl, { headers });
  }

  /*getUserById(id: Number): Observable<User> {
    return this.http.get<User>(this.getUserByIdUrl + '?idUsuario=' + id);
  }*/
  getUserById(id: Number): Observable<User> {
    // return this.http.get<User>(this.getUserByIdUrl + '?idUsuario=' + id);
    return this.http.get<User>(this.getUserByIdUrl + id);
  }
  createUser(user: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let userCreate: User;
    this.http.put(this.registerURL, user, { headers }).subscribe(
      val => {
        userCreate = val as User;
        console.log('PUT call successful value returned in body', val);
      },
      response => {
        console.log('PUT call in error', response);
      },
      () => {
        if (userCreate.id !== undefined) {
          sessionStorage.setItem('id', userCreate.id.toString());
          sessionStorage.setItem('userName', userCreate.userName.toString());
          this.router.navigate([CORELINKS.artistDetails, userCreate.id]);
        }
        console.log('The PUT observable is now completed.');
      }
    );
  }
  loginUser(login: any): User {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let userLogin: User;
    this.http.post(this.loginURL, login, { headers }).subscribe(
      val => {
        userLogin = val as User;
        // console.log('post call successful value returned in body', userLogin);
      },
      response => {
        window.alert('Usuario o Contraseña incorrecto/s');
      },
      () => {
        if (userLogin.id !== undefined) {
          sessionStorage.setItem('id', userLogin.id.toString());
          sessionStorage.setItem('userName', userLogin.userName.toString());
          this.router.navigate([CORELINKS.artistDetails, userLogin.id]);
        }
      }
    );
    return userLogin;
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserList {
  id: Number;
  userName: String;
  firstName: String;
  lastName: String;
  age: Number;
  email: String;
  photo: String;
  phone: Number;
  description: String;
  type?: String;
}

@Injectable()
export abstract class UserServiceListModel {
  abstract getUsers(): Observable<UserList[]>;
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment.model';
import { Meeting } from './meeting.model';
import { GlobalEventList } from './global.event.list.model';
import { GlobalEvent } from './global.event.model';

export interface User {
  id: Number;
  userName: String;
  firstName: String;
  lastName: String;
  password: String;
  age: Number;
  email: String;
  photo: String;
  phone: Number;
  description: String;
  appointmentList: Appointment[];
  eventList: Meeting[];
  globalEventList: GlobalEvent[];
  type?: String;

  loginToUserVo(any): void;
}

@Injectable()
export abstract class UserServiceModel {
  abstract getUserById(id: Number): Observable<User>;
}

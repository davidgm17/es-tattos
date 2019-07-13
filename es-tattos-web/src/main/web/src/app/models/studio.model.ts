import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment.model';
import { Meeting } from './meeting.model';
import { GlobalEvent } from './global.event.model';

export interface Studio {
  id: Number;
  photo: String;
  description: String;
  studioName: String;
  phone: Number;
  // imgList?: String[];
  email: String;
  appointment: Boolean;
  appointmentList: Appointment[];
  eventList: Meeting[];
  globalEventList: GlobalEvent[];
}

@Injectable()
export abstract class StudioServiceModel {
  abstract getStudioById(id: Number): Observable<Studio>;
}

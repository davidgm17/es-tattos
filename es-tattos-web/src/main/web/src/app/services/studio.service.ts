import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudioListModel, StudioList } from '../models/studio.list.model';
import { StudioServiceModel, Studio } from '../models/studio.model';
import { URLSERVER } from '../app.config';
import { Meeting, MeetingServiceModel } from '../models/meeting.model';
import { MeetingVO } from '../models/meetingVO';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class StudioService implements StudioListModel, StudioServiceModel, MeetingServiceModel {

  getStudiosByIdUrl = URLSERVER.STUDIO_DETAILS;
  getStudiosListUrl = URLSERVER.STUDIOS_LIST;
  meetingURL = URLSERVER.MEETING;
  appointmentURL = URLSERVER. APPOINMENT;

  constructor(private http: HttpClient) {}

  getStudios(): Observable<StudioList[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<StudioList[]>(this.getStudiosListUrl, { headers });
  }
  getStudioById(id: Number): Observable<Studio> {
    return this.http.get<Studio>(this.getStudiosByIdUrl + id);
  }

  /**
   * Creamos un nuevo objeto meeting
   * @param meeting Peticion por parte de un cliente para una cita de tatuaje
   */
  sendMeeting(meeting: Meeting): Meeting {
    const meetingResponse: Meeting = meeting;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(this.meetingURL, meeting, { headers }).subscribe(
      (val: Meeting ) => {
        console.log('PUT call successful value returned in body', val);
        meetingResponse.id =  val.id;
      },
      response => {
        console.log('PUT call in error', response);
      },
      () => {
        console.log('The PUT observable is now completed.');
      }
    );
    return meetingResponse;
  }

  getMeetingsFromStudioId(id: Number): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(this.meetingURL + id);
  }

  sendAppointment(appointment: Appointment): Appointment {
    const appointmetResponse: Appointment = appointment;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(this.appointmentURL, appointment, { headers }).subscribe(
      (val: Meeting ) => {
        console.log('PUT call successful value returned in body', val);
        appointmetResponse.id =  val.id;
      },
      response => {
        console.log('PUT call in error', response);
      },
      () => {
        console.log('The PUT observable is now completed.');
      }
    );
    return appointmetResponse;
  }

}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * stateId:[
 * 1:"ENVIADO",
 * 2:"RECIBIDO",
 * 3:"LEIDO",
 * 4:"ACEPTADO",
 * 5:"RECHAZADO"
 * ]
 */
export interface Appointment {
  id: Number;
  studioId: Number;
  studioName: String;
  applicantId: Number;
  applicantName: String;
  receiverId: Number;
  receiverName: String;
  date: Date;
  lastUpdate: Date;
  stateId: Number;
  mesage: String;
  file: String;
}

@Injectable()
export abstract class AppointmentServiceModel {
  abstract getAppointments(): Observable<Appointment[]>;
  abstract openMesageAppoiment(): String;
}

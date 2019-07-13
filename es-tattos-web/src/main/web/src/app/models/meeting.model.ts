import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



/**
 * stateId:[
 * 1:"ENVIADO",
 * 2:"RECIBIDO",
 * 3:"LEIDO",
 * 4:"ACEPTADO",
 * 5:"RECHAZADO"
 * ]
 */
export interface Meeting {
  id: Number;
  userId: Number;
  userName: String;
  studioId: Number;
  studioName: String;
  date: Date;
  stateId: Number;
  description: String;
}

@Injectable()
export abstract class MeetingServiceModel {
  abstract getMeetingsFromStudioId(id: Number): Observable<Meeting[]>;
}

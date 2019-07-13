import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GlobalEvent {
  id: Number;
  photo: String;
  title: String;
  date: Date;
  description: String;
  phone: Number;
  email: String;
}

@Injectable()
export abstract class GlobalEventModel {
  abstract getGlobalEventById(id: Number): Observable<GlobalEvent>;
}

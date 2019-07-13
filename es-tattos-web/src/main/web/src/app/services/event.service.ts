import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSERVER } from './../app.config';
import { Injectable } from '@angular/core';

import {
  GlobalEventListModel,
  GlobalEventList
} from '../models/global.event.list.model';
import { GlobalEventModel, GlobalEvent } from '../models/global.event.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService implements GlobalEventListModel, GlobalEventModel {
  getGlobalEventsListUrl = URLSERVER.EVENT_LIST;
  getGlobalEventsUrlById = URLSERVER.GLOBAL_EVENT;

  constructor(private http: HttpClient) {}


  getGlobalEvents(): Observable<GlobalEventList[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<GlobalEventList[]>(this.getGlobalEventsListUrl,{headers});
  }
  getGlobalEventById(id: Number): Observable<GlobalEvent> {
    return this.http.get<GlobalEvent>(this.getGlobalEventsUrlById + id);
  }

}

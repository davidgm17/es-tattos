import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GlobalEventList {
  id: Number;
  photo: String;
  title: String;
  date: Date;
  description: String;
}

@Injectable()
export abstract class GlobalEventListModel {
  abstract getGlobalEvents(): Observable<GlobalEventList[]>;
}

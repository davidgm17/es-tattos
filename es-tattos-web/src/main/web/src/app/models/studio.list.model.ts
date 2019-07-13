import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface StudioList {
  id: Number;
  photo: String;
  description: String;
  studioName: String;
}

@Injectable()
export abstract class StudioListModel {
  abstract getStudios(): Observable<StudioList[]>;
}

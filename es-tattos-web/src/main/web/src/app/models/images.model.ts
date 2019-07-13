import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Image {
  id: Number;
  path: String;
  tagName: String;
  uploadDate: Date;
  descrition: String;
}

@Injectable()
export abstract class ImageModel {
  abstract getImageById(id: Number): Observable<Image>;
  abstract setImage(Image);
}

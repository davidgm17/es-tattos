import { Meeting } from './meeting.model';

export class MeetingVO implements Meeting {
  id: Number;
  userId: Number;
  userName: String;
  studioId: Number;
  studioName: String;
  description: String;
  date: Date;
  stateId: Number;

  MeetingVO() {}

  parseToMeetingVO(object: Meeting) {
    this.id = object.id;
    this.userId = object.userId;
    this.userName = object.userName;
    this.studioId = object.studioId;
    this.studioName = object.studioName;
    this.description = object.description;
    this.date = object.date;
    this.stateId = object.stateId;
  }
}

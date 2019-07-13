import { Appointment } from './appointment.model';

export class AppointmentVo implements Appointment {
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

  AppointmentVo() {}

  parseToAppointmentVo(object: Appointment) {
    this.id = object.id;
    this.studioId = object.studioId;
    this.studioName = object.studioName;
    this.applicantId = object.applicantId;
    this.applicantName = object.applicantName;
    this.receiverId = object.receiverId;
    this.receiverName = object.receiverName;
    this.date = object.date;
    this.lastUpdate = object.lastUpdate;
    this.stateId = object.stateId;
    this.mesage = object.mesage;
    this.file = object.file;
  }
}

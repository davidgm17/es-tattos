import { Component, Input } from '@angular/core';
import { Meeting } from '../../models/meeting.model';
import { Appointment } from '../../models/appointment.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AppointmentVo } from '../../models/appointmentVO';
import { MeetingVO } from '../../models/meetingVO';
import { STATUS } from 'src/app/app.config';
import { StudioService } from '../../services/studio.service';

@Component({
  selector: 'app-event-acordeon',
  templateUrl: './event-acordeon.component.html',
  styleUrls: ['./event-acordeon.component.scss']
})
export class EventAcordeonComponent {
  @Input() toList: any[];
  step = 0;

  constructor(private studioService: StudioService) {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  objectAcept(object: any) {
    if (object.applicantId != null || object.applicantId !== undefined) {
      let appointment = new AppointmentVo();
      appointment.parseToAppointmentVo(object);
      appointment.stateId = STATUS.ACEPTADO;
      appointment.lastUpdate = new Date();
      console.log('Soy apoointmetn', appointment);
      this.updateAppointment(appointment);
    } else if (
      (object.applicantId == null || object.applicantId === undefined) &&
      (object.userId == null || object.userId === undefined)
    ) {
      console.log('Soy evento global');
    } else {
      let meeting = new MeetingVO();
      meeting.parseToMeetingVO(object);
      meeting.stateId = STATUS.ACEPTADO;
      console.log('Soy metting', meeting, typeof meeting);
      this.updateMeeting(meeting);
    }
  }

  objectDelete(object: any) {
    if (object.applicantId != null || object.applicantId !== undefined) {
      let appointment = new AppointmentVo();
      appointment.parseToAppointmentVo(object);
      appointment.stateId = STATUS.RECHAZADO;
      appointment.lastUpdate = new Date();
      console.log('Soy apoointmetn', appointment);
      this.updateAppointment(appointment);
    } else if (
      (object.applicantId == null || object.applicantId === undefined) &&
      (object.userId == null || object.userId === undefined)
    ) {
      console.log('Soy evento global');
    } else {
      let meeting = new MeetingVO();
      meeting.parseToMeetingVO(object);
      meeting.stateId = STATUS.RECHAZADO;
      console.log('Soy metting', meeting, typeof meeting);
      this.updateMeeting(meeting);
    }
  }


  updateMeeting(meeting: Meeting) {
    const meetingUpdate: Meeting = this.studioService.sendMeeting(meeting);
    this.toList.unshift(meetingUpdate);
  }

  updateAppointment(appointment: Appointment) {
    const apointmentUpdate: Appointment = this.studioService.sendAppointment(
      appointment
    );
    this.toList.unshift(apointmentUpdate);
  }
}

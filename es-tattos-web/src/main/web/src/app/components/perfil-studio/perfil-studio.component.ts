import { Studio } from './../../models/studio.model';
import { Component, OnInit } from '@angular/core';
import { StudioService } from 'src/app/services/studio.service';
import { ActivatedRoute } from '@angular/router';
import { MeetingVO } from 'src/app/models/meetingVO';
import { Meeting } from '../../models/meeting.model';
import { STATUS, UNDEFINED } from 'src/app/app.config';
import { Appointment } from '../../models/appointment.model';
import { AppointmentVo } from 'src/app/models/appointmentVO';

@Component({
  selector: 'app-perfil-studio',
  templateUrl: './perfil-studio.component.html',
  styleUrls: ['./perfil-studio.component.scss']
})
export class PerfilStudioComponent implements OnInit {
  perfilStudio: Studio;
  paramId: Number;
  meeting: Meeting = new MeetingVO();
  appointment: Appointment = new AppointmentVo();

  constructor(
    private studioService: StudioService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      this.paramId = Number(params.get('id'));
    });
  }

  ngOnInit() {
    // TODO dgm falta como controlar la llegada de este parametro desde otra vista.
    this.studioService
      .getStudioById(this.paramId)
      .subscribe(resp => this.setStudio(resp));
    // this.meeting = new MeetingVO();
  }
  setStudio(studio: Studio) {
    this.perfilStudio = studio;
  }

  sendMeeting(): void {
    if (sessionStorage.getItem('id')) {
      this.meeting.userId = Number.parseInt(sessionStorage.getItem('id'), 10);
    } else {
      window.alert('Usted no está Logeado, no puede realizar este proceso.');
    }
    // this.meeting.userName = 'usuario';
    this.meeting.studioId = this.perfilStudio.id;
    this.meeting.date = new Date();
    this.meeting.stateId = STATUS.ENTREGADO;
    // this.meeting.studioName = this.perfilStudio.studioName;

    if (
      this.perfilStudio.eventList == null ||
      this.perfilStudio.eventList === undefined
    ) {
      this.perfilStudio.eventList = [];
    }
    const meetingUpdate: Meeting = this.studioService.sendMeeting(this.meeting);
    this.perfilStudio.eventList.unshift(meetingUpdate);
  }

  sendAppointment(): void {
    this.appointment.studioId = this.perfilStudio.id;
    this.appointment.studioName = this.perfilStudio.studioName;
    this.appointment.date = new Date();
    this.appointment.lastUpdate = new Date();
    this.appointment.stateId = STATUS.ENTREGADO;
    // recoger los valores del usuario logeado
    console.log(sessionStorage);
    if (sessionStorage.getItem('id')) {
      this.appointment.applicantId = Number.parseInt(
        sessionStorage.getItem('id'),
        10
      );
      this.appointment.applicantName = sessionStorage.getItem('userName');
    } else {
      window.alert('Usted no está Logeado, no puede realizar este proceso.');
    }
    this.appointment.receiverId = UNDEFINED.ID;
    if (
      this.perfilStudio.appointmentList == null ||
      this.perfilStudio.appointmentList === undefined
    ) {
      this.perfilStudio.appointmentList = [];
    }
    const apointmentUpdate: Appointment = this.studioService.sendAppointment(
      this.appointment
    );
    this.perfilStudio.appointmentList.unshift(apointmentUpdate);
  }
}

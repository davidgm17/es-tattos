import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GlobalEvent } from 'src/app/models/global.event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-perfil-event',
  templateUrl: './perfil-event.component.html',
  styleUrls: ['./perfil-event.component.scss']
})
export class PerfilEventComponent implements OnInit {
  perfilGlobalEvent: GlobalEvent;
  paramId: Number;
  constructor(
    private studioService: EventService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      this.paramId = Number(params.get('id'));
    });
  }

  ngOnInit() {
    this.studioService
      .getGlobalEventById(this.paramId)
      .subscribe(resp => this.setGlobalEvent(resp));
  }
  setGlobalEvent(event: GlobalEvent) {
    this.perfilGlobalEvent = event;
  }
}

import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { GlobalEventList } from 'src/app/models/global.event.list.model';
import { CORELINKS } from 'src/app/app.config';

@Component({
  selector: 'app-tattoo-global-events',
  templateUrl: './tattoo-global-events.component.html',
  styleUrls: ['./tattoo-global-events.component.scss']
})
export class TattooGlobalEventsComponent implements OnInit {
  globalEventsList: GlobalEventList[];
  coreLinks = CORELINKS;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService
      .getGlobalEvents()
      .subscribe(respuesta => this.setGlobalEvents(respuesta));
  }
  setGlobalEvents(eventList: GlobalEventList[]) {
    this.globalEventsList = eventList;
  }
}

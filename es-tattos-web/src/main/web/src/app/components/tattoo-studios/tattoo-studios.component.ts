import { Component, OnInit } from '@angular/core';
import { StudioService } from 'src/app/services/studio.service';
import { StudioList } from 'src/app/models/studio.list.model';
import { CORELINKS } from 'src/app/app.config';

@Component({
  selector: 'app-tattoo-studios',
  templateUrl: './tattoo-studios.component.html',
  styleUrls: ['./tattoo-studios.component.scss']
})
export class TattooStudiosComponent implements OnInit {
  studios: StudioList[];
  coreLinks = CORELINKS;

  constructor(private studioService: StudioService) {}

  ngOnInit() {
    this.studioService.getStudios().subscribe(resp => this.setStudios(resp));
  }

  setStudios(studioList: StudioList[]) {
    this.studios = studioList;
  }
}

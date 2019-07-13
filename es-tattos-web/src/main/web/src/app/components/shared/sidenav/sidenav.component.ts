import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MENULINKS } from 'src/app/app.config';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidePanel: MatSidenav;
  links = MENULINKS;
  constructor() {}

  ngOnInit() {}
}

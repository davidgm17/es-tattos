import { Component, OnInit } from '@angular/core';
import { FOOTERLINKS } from 'src/app/app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLinks = FOOTERLINKS;
  constructor() { }

  ngOnInit() {
  }

}

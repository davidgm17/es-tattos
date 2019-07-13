import { Component, OnInit } from '@angular/core';
import { CORELINKS } from '../../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coreLinks = CORELINKS;
  constructor() {}

  ngOnInit() {}
}

window.onscroll = function() {
  const scrollPosY = window.scrollY;

  const quiensomosimg: any = document.getElementById('quiensomos-img');
  const quiensomostext: any = document.getElementById('quiensomos-text');

  if (
    quiensomosimg != null &&
    scrollPosY > quiensomosimg.getBoundingClientRect().y
  ) {
    quiensomosimg.classList.add('block', 'animated', 'fadeInRight', 'slow');
  }

  if (
    quiensomostext != null &&
    scrollPosY > quiensomostext.getBoundingClientRect().y
  ) {
    quiensomostext.classList.add('block', 'animated', 'fadeInLeft', 'slow');
  }
};

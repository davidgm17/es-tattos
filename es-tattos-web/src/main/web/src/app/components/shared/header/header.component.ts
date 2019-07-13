import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MENULINKS, BREAKPOINTS, CORELINKS } from 'src/app/app.config';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sideNavReference: SidenavComponent;
  links = MENULINKS;
  coreLinks = CORELINKS;
  breakpoints = BREAKPOINTS;
  screenWidth: Number;
  loginForm: FormGroup;
  sessionUser = sessionStorage.getItem('userName');

  constructor(private userService: UserService) {
    this.screenWidth = innerWidth;
    window.onresize = () => (this.screenWidth = innerWidth);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        // http://html5pattern.com/Passwords
        // Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'),
        Validators.minLength(3)
      ])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  toggleSidenav() {
    this.sideNavReference.sidePanel.toggle();
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const userLogin = this.userService.loginUser(this.loginForm.value);
    }
  }
}

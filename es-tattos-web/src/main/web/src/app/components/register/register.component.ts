import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { UserVO } from '../../models/userVO';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isChecked: Boolean = true;
  newUser: User;

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      userName: new FormControl('', [
        Validators.required, Validators.minLength(5)
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(3)
      ]),
      firstName: new FormControl('', [
        Validators.required, Validators.minLength(5)
      ]),
      lastName: new FormControl('', [
        Validators.required, Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.minLength(5)
      ]),
      description :  new FormControl('', [
        Validators.minLength(0)
      ])
    });
  }

  registerUser(): void {


    if (this.firstFormGroup.valid && this.isChecked) {

      console.log(this.firstFormGroup.value);
      this.newUser = new UserVO();
      this.newUser.loginToUserVo(this.firstFormGroup.value);
      console.log(this.newUser);
      this.userService.createUser(this.newUser);
    }

    /*
    const prueba: User = {
      id: null,
      userName: 'mario',
      firstName: 'godoy',
      lastName: 'salamanca',
      password: '123',
      age: 24,
      email: 'prueba@gmail.com',
      photo: 'http://localhost:4200/assets/img/register.png',
      phone: 971695333,
      description: 'gordo',
      eventList: null,
      appointmentList: null,
      globalEventList: null
    };
    this.userService.createUser(prueba);
    */
  }
}

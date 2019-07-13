import { User } from './user.model';

export class UserVO implements User {
  id: Number;
  userName: String;
  firstName: String;
  lastName: String;
  password: String;
  age: Number;
  email: String;
  photo: String;
  phone: Number;
  description: String;
  appointmentList: null;
  eventList: null;
  globalEventList: null;
  type?: String;

  constructor() {}

  loginToUserVo(login: any) {
    this.userName = login.userName;
    this.firstName = login.firstName;
    this.lastName = login.lastName;
    this.email = login.email;
    this.password = login.password;
    this.age = 25;
    this.phone = login.phone;
    this.description = login.description;

  }
}

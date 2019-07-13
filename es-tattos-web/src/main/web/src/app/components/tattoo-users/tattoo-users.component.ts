import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserList } from 'src/app/models/user.list.model';
import { CORELINKS } from '../../app.config';


@Component({
  selector: 'app-tattoo-users',
  templateUrl: './tattoo-users.component.html',
  styleUrls: ['./tattoo-users.component.scss']
})
export class TattooUsersComponent implements OnInit {
  userList: UserList[];
  coreLinks = CORELINKS;
  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(resp => this.setUsers(resp));
  }
  setUsers(usersList: UserList[]) {
    this.userList = usersList;
  }
}

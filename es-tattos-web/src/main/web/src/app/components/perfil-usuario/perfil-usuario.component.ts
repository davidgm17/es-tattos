import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { USERTYPE } from 'src/app/app.config';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from '../../models/meeting.model';
import { MeetingVO } from '../../models/meetingVO';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {
  perfilUsuario: User;
  activeMesage: Boolean;
  userType: Boolean;
  paramId: Number;


  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.paramId = Number(params.get('id'));
    });
  }

  ngOnInit() {
    this.userService
      .getUserById(this.paramId)
      .subscribe(resp => this.setPerfilUsuario(resp));
    this.activeMesage = false;

  }
  setPerfilUsuario(newUser: User) {
    this.perfilUsuario = newUser;
  }
  mostrarMesage(): void {
    this.activeMesage = true;
  }

}

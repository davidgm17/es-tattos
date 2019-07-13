import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TattooStudiosComponent } from './components/tattoo-studios/tattoo-studios.component';
import { PolicyComponent } from './components/policy/policy.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { TattooUsersComponent } from './components/tattoo-users/tattoo-users.component';
import { PerfilStudioComponent } from './components/perfil-studio/perfil-studio.component';

import { UserService } from './services/user.service';
import { StudioService } from './services/studio.service';
import { EventService } from './services/event.service';

import { EventAcordeonComponent } from './components/event-acordeon/event-acordeon.component';
import { TattooGlobalEventsComponent } from './components/tattoo-global-events/tattoo-global-events.component';
import { PerfilEventComponent } from './components/perfil-event/perfil-event.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    TattooStudiosComponent,
    PolicyComponent,
    PerfilUsuarioComponent,
    LoginComponent,
    TattooUsersComponent,
    PerfilStudioComponent,
    EventAcordeonComponent,
    TattooGlobalEventsComponent,
    PerfilEventComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [UserService, StudioService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}

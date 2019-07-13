import { TattooGlobalEventsComponent } from './components/tattoo-global-events/tattoo-global-events.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PolicyComponent } from './components/policy/policy.component';
import { TattooStudiosComponent } from './components/tattoo-studios/tattoo-studios.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilStudioComponent } from './components/perfil-studio/perfil-studio.component';
import { TattooUsersComponent } from './components/tattoo-users/tattoo-users.component';
import { CORELINKS } from './app.config';
import { PerfilEventComponent } from './components/perfil-event/perfil-event.component';


const routes: Routes = [
  { path: CORELINKS.home, component: HomeComponent },
  { path: CORELINKS.register, component: RegisterComponent },
  { path: CORELINKS.login, component: LoginComponent },
  { path: CORELINKS.policy, component: PolicyComponent },
  { path: CORELINKS.studios, component: TattooStudiosComponent },
  { path: CORELINKS.studioDetail + ':id', component: PerfilStudioComponent },
  { path: CORELINKS.users, component: TattooUsersComponent },
  { path: CORELINKS.userDetails + ':id', component: PerfilUsuarioComponent },
  { path: CORELINKS.artists, component: TattooUsersComponent },
  { path: CORELINKS.artistDetails + ':id', component: PerfilUsuarioComponent },
  { path: CORELINKS.globalevents, component: TattooGlobalEventsComponent },
  { path: CORELINKS.eventDetails + ':id', component: PerfilEventComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

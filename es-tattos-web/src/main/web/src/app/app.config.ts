'use strict';

import { Link } from './models/link.model';

export const CORELINKS: any = {
  artistDetails: 'artist/details/',
  artists: 'artists',
  home: 'home',
  login: 'login',
  policy: 'policy',
  register: 'register',
  studioDetail: 'studio/details/',
  studios: 'studios',
  userDetails: 'user/details/',
  users: 'users',
  globalevents: 'events',
  eventDetails: 'events/details/'
};

export const MENULINKS: Link[] = [
  { path: CORELINKS.home, description: 'home', icon: 'info' },
  { path: CORELINKS.studios, description: 'estudios', icon: 'menu' },
  { path: CORELINKS.artists, description: 'artistas', icon: 'grade' }
];

export const FOOTERLINKS: Link[] = [
  { path: CORELINKS.home, description: 'home', icon: 'info' },
  { path: CORELINKS.studios, description: 'estudios', icon: 'menu' },
  { path: CORELINKS.artists, description: 'artistas', icon: 'grade' },
  {
    path: CORELINKS.policy,
    description: 'politica de privacidad',
    icon: 'grade'
  }
];

export const BREAKPOINTS: any = {
  mobile_small: 240,
  mobile_large: 320,
  tablet_small: 480,
  tablet_large: 768,
  screen_small: 1024,
  screen_large: 1280
};

export const USERTYPE: any = {
  USER: 'USER',
  ARTIST: 'ARTIST'
};
export const STATUS: any = {
  ENTREGADO: 1,
  NODISPONIBLE: 2,
  ACEPTADO: 3,
  RECHAZADO: 4
};
// export const URLSERVER: any = {
//   USER_DETAILS: 'http://localhost:8090/user/details/',
//   USER_LIST: 'http://localhost:8090/users/',
//   STUDIOS_LIST: 'http://localhost:8090/studios/',
//   STUDIO_DETAILS: 'http://localhost:8090/studio/',
//   ARTIST_LIST: 'http://localhost:8090/artists/',
//   MEETING: 'http://localhost:8090/meeting/',
//   APPOINMENT: 'http://localhost:8090/appointment/',
//   EVENT_LIST: 'http://localhost:8090/events/',
//   GLOBAL_EVENT: 'http://localhost:8090/globalEvent/',
//   LOGIN: 'http://localhost:8090/auth/login/2'
// };

export const URLSERVER: any = {
  USER_DETAILS: 'user/details/',
  USER_LIST: 'users/',
  STUDIOS_LIST: 'studios/',
  STUDIO_DETAILS: 'studio/',
  ARTIST_LIST: 'artists/',
  MEETING: 'meeting/',
  APPOINMENT: 'appointment/',
  EVENT_LIST: 'events/',
  GLOBAL_EVENT: 'globalEvent/',
  LOGIN: 'auth/login/2'
};

export const UNDEFINED: any = {
  ID: 0,
  NAME: ''
}

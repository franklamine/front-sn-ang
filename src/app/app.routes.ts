import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Friends } from '../pages/friends/friends';
import { Video } from '../pages/video/video';
import { Game } from '../pages/game/game';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { MainLayout } from '../composants/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'friends', component: Friends },
      { path: 'video', component: Video },
      { path: 'game', component: Game },
      { path: 'profile/:id', component: Profile },
    ],
  },

  { path: 'login', component: Login },

  { path: 'register', component: Register },
];

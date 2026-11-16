import { Routes } from '@angular/router';
import {Home} from '../pages/home/home';
import {Friends} from '../pages/friends/friends';
import {Video} from '../pages/video/video';
import {Game} from '../pages/game/game';

export const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'friends', component: Friends},
  {path: 'video', component: Video},
  {path: 'game', component: Game},
];

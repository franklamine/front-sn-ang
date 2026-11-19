import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Friends } from '../pages/friends/friends';
import { Video } from '../pages/video/video';
import { Game } from '../pages/game/game';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { MainLayout } from '../composants/main-layout/main-layout';
import { authGuard, guestGuard } from '../guards/auth-guard';
import { NotFound } from '../pages/not-found/not-found';
import { VerifyAccount } from '../pages/verify-account/verify-account';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { ResetPassword } from '../pages/reset-password/reset-password';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'friends', component: Friends },
      { path: 'video', component: Video },
      { path: 'game', component: Game },
      { path: 'profile/:id', component: Profile },
    ],
  },

  { path: 'login', component: Login, canActivate: [guestGuard] },
  { path: 'verify-account', component: VerifyAccount },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },

  { path: 'register', component: Register, canActivate: [guestGuard] },
  { path: '**', component: NotFound },
];

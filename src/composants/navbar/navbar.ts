import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideBell,
  LucideGamepad2,
  LucideHouse,
  LucideMenu,
  LucideMessageCircle,
  LucideSearch,
  LucideUsers,
  LucideVideo,
} from '@lucide/angular';
import { Account } from '../account/account';

@Component({
  imports: [
    RouterLink,
    LucideHouse,
    LucideUsers,
    LucideVideo,
    LucideGamepad2,
    LucideMenu,
    LucideMessageCircle,
    LucideBell,
    LucideSearch,
    RouterLinkActive,
    Account,
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  showAccount = signal(false);

  toggleAccount(): void {
    this.showAccount.update((value) => !value);
  }

  closeAccount(): void {
    this.showAccount.set(false);
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideBell, LucideGamepad2, LucideHouse, LucideMenu, LucideMessageCircle,
  LucideSearch, LucideUsers, LucideVideo
} from '@lucide/angular';

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
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {}

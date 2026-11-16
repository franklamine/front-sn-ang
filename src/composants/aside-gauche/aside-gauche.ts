import { Component } from '@angular/core';
import { LucideHouse, LucideMessageCircle, LucideUsers } from '@lucide/angular';

@Component({
  imports: [LucideHouse, LucideMessageCircle, LucideUsers],
  selector: 'app-aside-gauche',
  styleUrl: './aside-gauche.css',
  templateUrl: './aside-gauche.html',
})
export class AsideGauche {}

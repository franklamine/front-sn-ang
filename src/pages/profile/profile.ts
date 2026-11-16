import { Component } from '@angular/core';
import { LucideCamera, LucideChevronDown, LucideEllipsis, LucideMapPin, LucidePencil, LucidePlus } from '@lucide/angular';

@Component({
  imports: [
    LucideCamera,
    LucidePlus,
    LucidePencil,
    LucideChevronDown,
    LucideEllipsis,
    LucideMapPin,
  ],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {}

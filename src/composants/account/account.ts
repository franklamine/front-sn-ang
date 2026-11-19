import { Component, inject, input, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service';
import {
  LucideCircleQuestionMark,
  LucideLogOut,
  LucideMessageCircle,
  LucideSettings,
  LucideSun,
  LucideUser,
} from '@lucide/angular';

@Component({
  imports: [
    LucideLogOut,
    LucideMessageCircle,
    LucideSun,
    LucideCircleQuestionMark,
    LucideSettings,
    LucideUser,
    RouterLink,
  ],
  selector: 'app-account',
  styleUrl: './account.css',
  templateUrl: './account.html',
})
export class Account {
  // @Input() userConnected = null;
  // @Output() close = new EventEmitter<void>();

  userConnected = input(null);
  close = output<void>();

  private authService = inject(AuthService);
  private router = inject(Router);

  deconnexion(): void {
    this.authService.logout();
    this.close.emit();
    void this.router.navigate(['/login']);
  }
}

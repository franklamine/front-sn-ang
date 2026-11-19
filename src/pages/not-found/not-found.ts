import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideHouse, LucideSearch } from '@lucide/angular';

@Component({
  imports: [LucideSearch, LucideHouse],
  selector: 'app-not-found',
  styleUrl: './not-found.css',
  templateUrl: './not-found.html',
})
export class NotFound {
  private router = inject(Router);

  // Retour à l'accueil
  goHome(): void {
    this.router.navigate(['/home']);
  }

  // Retour à la page précédente
  goBack(): void {
    window.history.back();
  }

}

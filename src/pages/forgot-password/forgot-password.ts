import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { LucideKeyRound, LucideMail, LucideSend } from '@lucide/angular';

@Component({
  imports: [RouterLink, LucideSend, FormsModule, LucideMail, LucideKeyRound],
  selector: 'app-forgot-password',
  styleUrl: './forgot-password.css',
  templateUrl: './forgot-password.html',
})
export class ForgotPassword {
  utilisateur = {
    email: '',
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    // private toastr: ToastrService,
  ) {}

  // ENVOYER LE CODE DE RÉINITIALISATION
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.http
      .post('/frank-api/utilisateurs/mot-de-passe-oublier', this.utilisateur, {
        responseType: 'text',
      })
      .subscribe({
        next: (response) => {
          // this.toastr.success(response, 'Succès', { positionClass: 'toast-top-center' });

          // Redirection vers la page nouveau mot de passe
          this.router.navigate(['/reset-password']);
        },

        error: (error) => {
          const message = error.error?.message || error.error || "Erreur lors de l'envoi";

          // this.toastr.error(message, 'Erreur', { positionClass: 'toast-top-center' });
        },
      });
  }
}

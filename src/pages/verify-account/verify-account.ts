import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LucideShieldCheck } from '@lucide/angular';

@Component({
  imports: [LucideShieldCheck, FormsModule, RouterLink],
  selector: 'app-verify-account',
  styleUrl: './verify-account.css',
  templateUrl: './verify-account.html',
})
export class VerifyAccount {
  activation = {
    code: '',
  };

  afficherLienRenvoyer = false;

  emailActivationUtilisateur: string | null = localStorage.getItem('emailActivationUtilisateur');

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  // ACTIVATION DU COMPTE
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.http
      .post('/frank-api/utilisateurs/activation', this.activation, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          // this.toastr.success(response, 'Succès', { positionClass: 'toast-top-center' });
          this.router.navigate(['/connexion']);
        },

        error: (error) => {
          const message = error.error?.message || error.error || 'Code invalide ou expiré.';
          // this.toastr.error(message, 'Erreur', { positionClass: 'toast-top-center' });
          this.afficherLienRenvoyer = true;
          this.activation.code = '';
          form.resetForm();
        },
      });
  }

  // DEMANDER UN NOUVEAU CODE
  demanderNouveauCode(): void {
    if (!this.emailActivationUtilisateur) {
      // this.toastr.error('Adresse email introuvable.', 'Erreur', { positionClass: 'toast-top-center', });
      return;
    }

    this.http
      .post(
        '/frank-api/utilisateurs/nouveau-code',
        {
          email: this.emailActivationUtilisateur,
        },
        { responseType: 'text' },
      )
      .subscribe({
        next: () => {
          // this.toastr.success('Un nouveau code a été envoyé à votre email.', 'Succès', { positionClass: 'toast-top-center', });
          this.afficherLienRenvoyer = false;
        },

        error: (error) => {
          const message = error.error?.message || error.error || 'Erreur lors de l’envoi du code.';

          // this.toastr.error(message, 'Erreur', { positionClass: 'toast-top-center' });
          console.log(message, 'Erreur', { positionClass: 'toast-top-center' });
        },
      });
  }
}

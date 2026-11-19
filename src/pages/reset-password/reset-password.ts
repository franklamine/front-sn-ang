import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideLock, LucideLockKeyhole, LucideShieldCheck } from '@lucide/angular';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [RouterLink, LucideLockKeyhole, FormsModule, LucideShieldCheck, LucideLock],
  selector: 'app-reset-password',
  styleUrl: './reset-password.css',
  templateUrl: './reset-password.html',
})
export class ResetPassword {
  utilisateur = {
    nouveauMotDePasse: '',
    confirmationMotDePasse: '',
    code: '',
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    // private toastr: ToastrService,
  ) {}

  // RÉINITIALISATION DU MOT DE PASSE
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    // Vérification de la correspondance des mots de passe
    if (this.utilisateur.nouveauMotDePasse !== this.utilisateur.confirmationMotDePasse) {
      // this.toastr.error('Les mots de passe ne correspondent pas.', 'Erreur', { positionClass: 'toast-top-center', });
      return;
    }

    this.http
      .post('/frank-api/utilisateurs/nouveau-mot-de-passe', this.utilisateur, {
        responseType: 'text',
      })
      .subscribe({
        next: (response) => {
          // this.toastr.success(response, 'Succès', { positionClass: 'toast-top-center' });

          // Redirection vers la connexion
          this.router.navigate(['/connexion']);
        },

        error: (error) => {
          const message = error.error?.message || error.error || 'Échec de la réinitialisation.';

          // this.toastr.error(message, 'Erreur', { positionClass: 'toast-top-center' });

          // Réinitialisation des champs
          this.utilisateur = {
            code: '',
            nouveauMotDePasse: '',
            confirmationMotDePasse: '',
          };

          form.resetForm(this.utilisateur);
        },
      });
  }
}

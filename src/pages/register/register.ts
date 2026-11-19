import { Component, inject } from '@angular/core';
import {
  LucideLock,
  LucideMail,
  LucideShieldCheck,
  LucideUser,
  LucideUserPlus,
} from '@lucide/angular';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthPresentation } from '../../composants/auth-presentation/auth-presentation';
import { UserRegister } from '../../modeles/userModele';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  imports: [
    RouterLink,
    FormsModule,
    LucideLock,
    LucideMail,
    LucideUser,
    LucideUserPlus,
    LucideShieldCheck,
    AuthPresentation,
  ],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  authService = inject(AuthService);
  router = inject(Router);

  utilisateur: UserRegister = {
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    motDePasseConfirmation: '',
  };

  inscriptionEnCours = false;

  onSubmit(registerForm: NgForm):void {
    this.authService.singnUp(registerForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        registerForm.controls['motDePasse']?.reset();
        registerForm.controls['motDePasseConfirmation']?.reset();
      },
    });
  }
}

import { Component } from '@angular/core';
import {
  LucideLock,
  LucideMail,
  LucideShieldCheck,
  LucideUser,
  LucideUserPlus,
} from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthPresentation } from '../../composants/auth-presentation/auth-presentation';

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
  utilisateur = {
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    motDePasseConfirmation: '',
  };

  inscriptionEnCours = false;

  onSubmit() {}
}

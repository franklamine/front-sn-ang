import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideLock, LucideLogIn, LucideMail } from '@lucide/angular';
import { AuthPresentation } from '../../composants/auth-presentation/auth-presentation';

@Component({
  imports: [RouterLink, FormsModule, LucideLogIn, LucideLock, LucideMail, AuthPresentation],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  utilisateur = {
    email: '',
    motDePasse: '',
  };

  onSubmit() {}
}

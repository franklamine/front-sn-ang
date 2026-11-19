import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LucideLock, LucideLogIn, LucideMail } from '@lucide/angular';
import { AuthPresentation } from '../../composants/auth-presentation/auth-presentation';
import { UserLogin } from '../../modeles/userModele';
import { AuthService } from '../../services/auth-service/auth-service';

@Component({
  imports: [RouterLink, FormsModule, LucideLogIn, LucideLock, LucideMail, AuthPresentation],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  authservice = inject(AuthService);
  router  = inject(Router);

  utilisateur: UserLogin = {
    email: '',
    motDePasse: '',
  };

  onSubmit(loginForm: NgForm): void {
    this.authservice.singnIn(loginForm.value).subscribe({
      next: (data) => {
        this.authservice.accessToken.set(data.accessToken);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        loginForm.controls['motDePasse'].reset();
      },
    });
  }
}

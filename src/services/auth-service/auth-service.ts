import { computed, inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin, UserRegister } from '../../modeles/userModele';

@Service()
export class AuthService {
  private apiUrl = 'http://localhost:8081/frank-api/utilisateurs';
  http = inject(HttpClient);

  accessToken = signal<string | null>(localStorage.getItem('accessToken') || null);

  singnUp(newUser: UserRegister): Observable<string> {
    return this.http.post<string>(this.apiUrl + '/inscription', newUser, { responseType: 'text' });
  }

  singnIn(userLogin: UserLogin): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/connexion', userLogin);
  }

  isAuthenticated = computed(() => !!this.accessToken());

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.accessToken.set(null);
  }
}

import { inject, Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
@Service()
export class PostService {
  private apiUrl = 'http://localhost:8081/frank-api/publications';

  private http = inject(HttpClient);

  // Récupérer toutes les publications
  getAllPublications(): Observable<any[]> {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJwcmVub20iOiJmcmFuayIsIm5vbSI6ImxhbWluZSIsInJvbGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1VUSUxJU0FURVVSIn1dLCJzdWIiOiJmb2thbWxhbWluZUBnbWFpbC5jb20iLCJpYXQiOjE3OTQ5NjY3OTEsImV4cCI6MTc5NTU3MTU5MX0.8zbor0DTGV7GmXbAC_WCKWndchIAMoQKwNqfaHwPmwg';
    return this.http.get<any[]>(this.apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  // Récupérer les publications d'un utilisateur
  getAllPublicationsByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/utilisateur/${userId}`);
  }

  // Créer une publication
  creerPublication(formData: FormData): Observable<string> {
    return this.http.post(this.apiUrl + '/publier', formData, {
      responseType: 'text',
    });
  }
}

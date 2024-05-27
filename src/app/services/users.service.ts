import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private isAuthenticatedValue: boolean = true; // Simulación de autenticación
  private userNameValue: string = 'John Doe'; // Simulación de nombre de usuario
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }
  private userName: string = 'John Doe'; 
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }
  getUserName(): string {
    return this.userName;
  }
  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  logout() {
    // Aquí iría la lógica para cerrar sesión
    console.log('Logged out');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../Entity/jwt-dto';
import { LoginUsuario } from '../Entity/login-usuario';
import { NuevoUsuario } from '../Entity/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
 authUrl = environment.apiAuthUrl;



  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario);
    
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(this.authUrl + 'login', loginUsuario);
    
  }
}

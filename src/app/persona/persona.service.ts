import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiServerUrl}/persona/all`);
  }

  public updatePersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiServerUrl}/persona/update`, persona);
  } 

  public addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.apiServerUrl}/persona/add`, persona);
  }

  public deletePersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/persona/delete/${id}`);
  }
}
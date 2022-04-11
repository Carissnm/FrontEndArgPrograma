import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudios } from './estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEstudios(): Observable<Estudios[]> {
    return this.http.get<Estudios[]>(`${this.apiServerUrl}/estudios/all`);
  }

  public updateEstudios(estudios: Estudios): Observable<Estudios> {
    return this.http.put<Estudios>(`${this.apiServerUrl}/estudios/update`, estudios);
  } 

  public addEstudios(estudios: Estudios): Observable<Estudios> {
    return this.http.post<Estudios>(`${this.apiServerUrl}/estudios/add`, estudios);
  }

  public deleteEstudios(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/estudios/delete/${id}`);
  }
}

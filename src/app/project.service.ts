// src/app/services/project.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:3000/projects';  // URL du JSON server

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les projets
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

// src/app/projects/projects.component.ts

import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];  // Déclare une variable pour stocker les projets

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    // Appelle le service pour récupérer les projets dès que le composant est initialisé
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data;  // Stocke les projets récupérés dans la variable
      },
      (error) => {
        console.error('Erreur de récupération des projets', error);
      }
    );
  }

}

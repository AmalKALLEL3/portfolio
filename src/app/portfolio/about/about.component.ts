import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  details = [
    {
      title: 'Biographie',
      description: 'Développeur passionné avec X années d’expérience dans le développement web et mobile. Amoureux des technologies modernes et de l’apprentissage continu.',
      icon: 'fa fa-user', // Exemple d'icône
      link: 'https://moncv.com/biographie'
    },
    {
      title: 'Certifications',
      description: 'Certifié Angular Developer, Google Cloud Associate, et plus.',
      icon: 'fa fa-certificate',
      link: 'https://moncv.com/certifications'
    },
    {
      title: 'Expérience professionnelle',
      description: 'Travail dans des entreprises reconnues pour développer des applications performantes et scalables.',
      icon: 'fa fa-briefcase',
      link: 'https://linkedin.com/in/votreprofil'
    }
  ];
}

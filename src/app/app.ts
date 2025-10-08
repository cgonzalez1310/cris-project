import { Component } from '@angular/core';
import { BannerComponent } from './sections/banner/banner';
import { AboutComponent } from './sections/about/about';
import { SkillsComponent } from './sections/skills/skills';
import { ProjectsComponent } from './sections/projects/projects';
import { CertificationsComponent } from './sections/certifications/certifications';
import { ContactoComponent } from './sections/contacto/contacto';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactoComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}

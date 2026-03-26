import { Component } from '@angular/core';
import { BannerComponent } from '../../sections/banner/banner';
import { AboutComponent } from '../../sections/about/about';
import { SkillsComponent } from '../../sections/skills/skills';
import { CertificationsComponent } from '../../sections/certifications/certifications';
import { ContactoComponent } from '../../sections/contacto/contacto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    CertificationsComponent,
    ContactoComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
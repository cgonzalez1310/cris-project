// import { Component } from '@angular/core';
// import { BannerComponent } from './sections/banner/banner';
// import { AboutComponent } from './sections/about/about';
// import { SkillsComponent } from './sections/skills/skills';
// import { CertificationsComponent } from './sections/certifications/certifications';
// import { ContactoComponent } from './sections/contacto/contacto';

import { discardPeriodicTasks } from "@angular/core/testing";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     BannerComponent,
//     AboutComponent,
//     SkillsComponent,
//     CertificationsComponent,
//     ContactoComponent,
//   ],
//   templateUrl: './app.html',
//   styleUrl: './app.scss',
// })
// export class AppComponent {}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}

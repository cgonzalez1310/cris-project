import { Routes } from '@angular/router';
import { ProjectsComponent } from './sections/projects/projects';
import { ContactoComponent } from './sections/contacto/contacto';

export const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactoComponent },

  // la ruta raíz "/" usa directamente AppComponent (ya está en bootstrap)
  { path: '', pathMatch: 'full', redirectTo: '/' },

  // wildcard → redirige a inicio
  { path: '**', redirectTo: '/' }
];
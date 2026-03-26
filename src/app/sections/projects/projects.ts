import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'B2B in AWS',
      desc: 'A completed AWS architecture',
      image: '/images/projects/b2b_aws.jpg'
    },
    {
      name: 'WebSocket in ECS',
      desc: 'A websocket in ECS deployed using Terraform',
      image: '/images/projects/bitgo_express.jpg'
    },
    {
      name: 'CICD Split for App and Infra',
      desc: 'A pipeline example when projects has app and infra components',
      image: '/images/projects/CICD_app_infra.jpg'
    }
  ];
}
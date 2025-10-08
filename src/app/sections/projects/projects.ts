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
      name: 'EKS Platform on AWS',
      desc: 'GitOps with Argo CD, monitoring and centralized logging.',
      image: 'assets/projects/p1.jpg'
    },
    {
      name: 'Serverless API',
      desc: 'API Gateway + Lambda + SQS with Terraform and CI/CD.',
      image: 'assets/projects/p2.jpg'
    },
    {
      name: 'Observability Stack',
      desc: 'Dashboards and alerts with Grafana/Prometheus.',
      image: 'assets/projects/p3.jpg'
    }
  ];
}

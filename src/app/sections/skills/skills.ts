import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'AWS', icon: 'images/aws.png' },
    { name: 'Docker', icon: 'images/docker.png' },
    { name: 'Kubernetes', icon: 'images/kubernetes.png' },
    { name: 'Terraform', icon: 'images/terraform.png' },
    { name: 'ArgoCD', icon: 'images/argocd.png' },
    { name: 'GitHub', icon: 'images/github.png' },
    { name: 'Grafana', icon: 'images/grafana.png' },
    { name: 'Datadog', icon: 'images/datadog.png' },
    { name: 'Linux', icon: 'images/linux.png' }
  ];
}

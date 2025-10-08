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
    { name: 'AWS', icon: 'assets/icons/aws.png' },
    { name: 'Docker', icon: 'assets/icons/docker.png' },
    { name: 'Kubernetes', icon: 'assets/icons/kubernetes.png' },
    { name: 'Terraform', icon: 'assets/icons/terraform.png' },
    { name: 'ArgoCD', icon: 'assets/icons/argocd.png' },
    { name: 'GitHub', icon: 'assets/icons/github.png' },
    { name: 'Grafana', icon: 'assets/icons/grafana.png' },
    { name: 'Datadog', icon: 'assets/icons/datadog.png' },
    { name: 'Linux', icon: 'assets/icons/linux.png' }
  ];
}

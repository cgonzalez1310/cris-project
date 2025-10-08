import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class CertificationsComponent {
  certifications = [
    {
      name: 'AWS Solutions Architect – Associate',
      icon: 'images/aws.png'
    },
    {
      name: 'AWS Cloud Practitioner',
      icon: 'images/aws.png'
    },
    {
      name: 'Cisco CCNA',
      icon: 'images/ccna.png'
    },
    {
      name: 'VMware VCP',
      icon: 'images/vcp.png'
    }
  ];
}

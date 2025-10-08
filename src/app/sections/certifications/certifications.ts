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
      icon: 'assets/certs/aws-saa.png'
    },
    {
      name: 'AWS Cloud Practitioner',
      icon: 'assets/certs/aws-cp.png'
    },
    {
      name: 'Cisco CCNA',
      icon: 'assets/certs/ccna.png'
    },
    {
      name: 'VMware VCP',
      icon: 'assets/certs/vcp.png'
    }
  ];
}

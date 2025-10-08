import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class BannerComponent {}

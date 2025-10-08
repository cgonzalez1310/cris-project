import { Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common'; 

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf, NgClass], 
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() variant: 'primary' | 'ghost' = 'primary';
  @Input() href?: string;
  @Input() type: 'button' | 'submit' = 'button';
}

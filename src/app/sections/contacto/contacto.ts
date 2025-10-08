import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class ContactoComponent {
  form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    alert('Mensaje enviado. ¡Gracias por contactarme!');
    this.form.reset();
  }
}

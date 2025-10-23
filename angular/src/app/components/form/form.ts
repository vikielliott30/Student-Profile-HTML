import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

// PrimeNG modules
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    SelectModule,
    CardModule,
  ],
  templateUrl: './form.html',
  styleUrls: ['./form.scss']
})
export class Form {
  private fb = inject(FormBuilder);

  motivos = [
    { label: 'Consultoria', value: 'consultoria' },
    { label: 'Desarrollo', value: 'dev' },
    { label: 'Testing', value: 'qa' },
    { label: 'Operaciones', value: 'op' },
    { label: 'Desarrollo y Operaciones', value: 'devops' },
  ];
    estudiantes = [
    { label: 'Victoria', value: 'Victoria' },
    { label: 'Leonardo', value: 'Leonardo' },
    { label: 'Ambos!', value: 'Ambos' },
  ];

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3), this.noEmojiValidator]],
    email: ['', [Validators.required, Validators.email]],
    motivo: [null, [Validators.required]],
    agree: [false, [Validators.requiredTrue]],
  });

  noEmojiValidator(control: any) {
    const emojiRegex = /\p{Emoji}/u;
    return emojiRegex.test(control.value) ? { noEmoji: true } : null;
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    // Aquí iría el envío real
    alert('Formulario enviado correctamente');
    this.form.reset();
  }
}

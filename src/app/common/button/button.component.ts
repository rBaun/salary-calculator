import { Component, Input } from '@angular/core';
import { ButtonBackComponent } from './button-back/button-back.component';
import { ButtonConfirmComponent } from './button-confirm/button-confirm.component';
import { ButtonResetComponent } from './button-reset/button-reset.component';
import { ButtonModel } from './models/button.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonBackComponent, ButtonConfirmComponent, ButtonResetComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) data!: ButtonModel;
}

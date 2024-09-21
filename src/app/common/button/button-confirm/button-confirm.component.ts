import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModel } from '../models/button.model';

@Component({
	selector: 'app-button-confirm',
	standalone: true,
	imports: [],
	templateUrl: './button-confirm.component.html',
	styleUrl: './button-confirm.component.scss',
})
export class ButtonConfirmComponent {
	@Input({ required: true }) data!: ButtonModel;
	@Output() confirmClick = new EventEmitter<void>();
}

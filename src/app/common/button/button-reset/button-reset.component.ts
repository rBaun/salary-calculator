import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModel } from '../models/button.model';

@Component({
	selector: 'app-button-reset',
	standalone: true,
	imports: [],
	templateUrl: './button-reset.component.html',
	styleUrl: './button-reset.component.scss',
})
export class ButtonResetComponent {
	@Input({ required: true }) data!: ButtonModel;
	@Output() resetClick = new EventEmitter<void>();
}

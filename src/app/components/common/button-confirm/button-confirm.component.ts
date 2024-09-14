import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button-confirm',
	standalone: true,
	imports: [],
	templateUrl: './button-confirm.component.html',
	styleUrl: './button-confirm.component.scss',
})
export class ButtonConfirmComponent {
	@Input({ required: true }) label!: string;
	@Input() disable = false;

	@Output() confirmClick = new EventEmitter<void>();
}

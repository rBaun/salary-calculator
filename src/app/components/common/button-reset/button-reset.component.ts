import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button-reset',
	standalone: true,
	imports: [],
	templateUrl: './button-reset.component.html',
	styleUrl: './button-reset.component.scss',
})
export class ButtonResetComponent {
	@Input({ required: true }) label!: string;
	@Input() display: 'both' | 'icon' | 'text' = 'both';
	@Input() disable = false;

	@Output() resetClick = new EventEmitter<void>();
}

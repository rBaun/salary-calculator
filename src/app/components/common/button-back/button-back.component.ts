import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
	selector: 'app-button-back',
	standalone: true,
	imports: [TranslocoModule],
	templateUrl: './button-back.component.html',
	styleUrl: './button-back.component.scss',
})
export class ButtonBackComponent {
	@Input({ required: true }) label!: string;
	@Input() displayIcon = false;
	@Input() disable = false;

	@Output() backClick = new EventEmitter<void>();
}

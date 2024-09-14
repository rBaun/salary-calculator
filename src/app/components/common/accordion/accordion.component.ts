import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-accordion',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './accordion.component.html',
	styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
	@Input({ required: true }) title!: string;
	protected isOpen = false;

	protected toggle = () => (this.isOpen = !this.isOpen);

	protected handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			this.toggle();
		}
	};
}

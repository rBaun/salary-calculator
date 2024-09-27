import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-dialog-header-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dialog-header-icon.component.html',
	styleUrl: './dialog-header-icon.component.scss',
})
export class DialogHeaderIconComponent {
	@Input({ required: true }) icon!: string;
}

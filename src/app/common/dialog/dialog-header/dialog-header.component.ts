import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogHeaderIconComponent } from '../dialog-header-icon/dialog-header-icon.component';

@Component({
	selector: 'app-dialog-header',
	standalone: true,
	imports: [DialogHeaderIconComponent],
	templateUrl: './dialog-header.component.html',
	styleUrl: './dialog-header.component.scss',
})
export class DialogHeaderComponent {
	@Input({ required: true }) title!: string;
	@Input({ required: true }) icon!: string;
	@Input() showCloseButton = true; 
	@Output() closeClick = new EventEmitter<void>();
}

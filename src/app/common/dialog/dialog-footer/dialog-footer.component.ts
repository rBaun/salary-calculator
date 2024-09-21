import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogAction } from '../models/dialog-action.model';
import { DialogActionType } from '../models/dialog-action.type';

@Component({
	selector: 'app-dialog-footer',
	standalone: true,
	imports: [],
	templateUrl: './dialog-footer.component.html',
	styleUrl: './dialog-footer.component.scss',
})
export class DialogFooterComponent {
	@Input() actions: DialogAction[] = [];
	@Output() actionClick = new EventEmitter<DialogActionType>();
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogService } from './dialog.service';
import { DialogModel } from './models/dialog.model';

/**
 * Dialog component only listens for dialog input and opens the dialog.
 * The dialog is built based on the dialog input received.
 */
@Component({
	selector: 'app-dialog',
	standalone: true,
	imports: [CommonModule, DialogHeaderComponent, DialogFooterComponent],
	templateUrl: './dialog.component.html',
	styleUrl: './dialog.component.scss',
})
export class DialogComponent {
	isOpen$ = new BehaviorSubject<boolean>(false);
	data!: DialogModel;

	protected icon: string = '';

	constructor(private dialogService: DialogService) {
		this.setDialogIcon();
	}

	closeDialog = (result: boolean) => {
		this.isOpen$.next(false);
		this.dialogService.closeDialog(result);
	};

	setDialogIcon = () => {
		// When a custom icon is provided, then always use it
		if (this.data?.customIcon) {
			this.icon = this.data.customIcon;
			return;
		}

		// When dialog type is custom, but no icon is provided, then no icon is shown
		if (this.data?.type === 'custom') {
			this.icon = '';
			return;
		}

		// Use dialog type as icon by default
		this.icon = this.data?.type;
	};

	protected onActionClick = (actionType: string) => {
		this.closeDialog(actionType !== 'cancel');
	};
}

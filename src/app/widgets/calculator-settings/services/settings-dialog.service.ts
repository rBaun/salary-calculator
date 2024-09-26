import { Injectable, ViewContainerRef } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Observable } from 'rxjs';
import { DialogService } from '../../../common/dialog/dialog.service';
import { DialogAction } from '../../../common/dialog/models/dialog-action.model';
import { DialogModel } from '../../../common/dialog/models/dialog.model';
import { CalculatorSettingsComponent } from '../calculator-settings.component';


@Injectable({
	providedIn: 'root',
})
export class SettingsDialogService extends DialogService {
	constructor(private translocoService: TranslocoService) {
		super();
	}

	openSettingsDialog(dialogHost: ViewContainerRef): Observable<boolean> {
		// Setup the Save action
		const saveAction: DialogAction = {
			type: 'save',
			label: this.translocoService.translate('buttons.save'),
		};

		// Setup the dialog input
		const dialogInput: DialogModel = {
			title: 'Settings',
			actions: [
				{ label: this.translocoService.translate('buttons.cancel'), type: 'cancel' },
				saveAction
			],
			type: 'custom',
			customIcon: 'fa-cog',
			content: CalculatorSettingsComponent,
		};

		// Open the dialog
		return this.openDialog(dialogInput);
	}
}

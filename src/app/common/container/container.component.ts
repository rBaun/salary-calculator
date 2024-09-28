import {
	AfterViewInit,
	Component,
	Input,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { SettingsDialogService } from '../../widgets/calculator-settings/services/settings-dialog.service';
import { IconComponent } from '../icon/icon.component';
import { ContainerModel } from './models/container.model';

@Component({
	selector: 'app-container',
	standalone: true,
	imports: [IconComponent, TranslocoPipe],
	templateUrl: './container.component.html',
	styleUrl: './container.component.scss',
})
export class ContainerComponent implements AfterViewInit {
	@Input({ required: true }) data!: ContainerModel;

	@ViewChild('dialogHost', { read: ViewContainerRef, static: true })
	dialogHost!: ViewContainerRef;

	constructor(private settingsDialogService: SettingsDialogService) {}

	ngAfterViewInit(): void {
		this.settingsDialogService.setViewContainerRef(this.dialogHost);
	}

	protected settingsClick = (): void => {
		this.settingsDialogService
			.openSettingsDialog(this.dialogHost)
			.subscribe(result => {
				if (result) {
					// TODO: save settings
				}
			});
	};
}

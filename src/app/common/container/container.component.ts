import {
	AfterViewInit,
	Component,
	Input,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { SettingsService } from '../../widgets/calculator-settings/settings.feature.service';
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

	constructor(private settingsService: SettingsService) {}

	ngAfterViewInit(): void {
		this.settingsService.setViewContainerRef(this.dialogHost);
	}

	protected settingsClick = (): void => {
		this.settingsService
			.openSettingsDialog(this.dialogHost)
			.subscribe(result => {
				console.log('Dialog result:', result);
				if (result) {
					// TODO: save settings
				}
			});
	};
}

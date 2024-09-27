import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './common/container/container.component';
import { ContainerModel } from './common/container/models/container.model';
import { DialogHostDirective } from './common/dialog/dialog-host.directive';
import { DialogService } from './common/dialog/dialog.service';
import { IconCogComponent } from './common/icon/icon-cog/icon-cog.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		IconCogComponent,
		CommonModule,
		DialogHostDirective,
		ContainerComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	protected containerInput!: ContainerModel;

	constructor(public dialogService: DialogService) {}

	ngOnInit(): void {
		this.setupContainerInput();
	}

	private setupContainerInput = (): void => {
		this.containerInput = {
			title: 'title',
			enableSettings: true,
		};
	};
}

import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-icon-info',
	standalone: true,
	imports: [],
	templateUrl: './icon-info.component.html',
	styleUrl: './icon-info.component.scss',
})
export class IconInfoComponent {
	@Input({ required: true }) infoText!: string;
}

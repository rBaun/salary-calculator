import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-icon-help',
	standalone: true,
	imports: [],
	templateUrl: './icon-help.component.html',
	styleUrl: './icon-help.component.scss',
})
export class IconHelpComponent {
	@Input({ required: true }) helpText!: string;
}

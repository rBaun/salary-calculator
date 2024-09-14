import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
	selector: 'app-button-back',
	standalone: true,
	imports: [TranslocoModule],
	templateUrl: './button-back.component.html',
	styleUrl: './button-back.component.scss',
})
export class ButtonBackComponent {
	@Input({ required: true }) label!: string;
	@Input({ required: true }) backRoute!: string;
	@Input() display: 'both' | 'icon' | 'text' = 'both';
	@Input() disable = false;

	constructor(private router: Router) {}

	protected onBackClick = () => this.router.navigate([this.backRoute]);
}

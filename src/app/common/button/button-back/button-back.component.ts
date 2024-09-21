import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModel } from '../models/button.model';

@Component({
	selector: 'app-button-back',
	standalone: true,
	imports: [],
	templateUrl: './button-back.component.html',
	styleUrl: './button-back.component.scss',
})
export class ButtonBackComponent {
	@Input({ required: true }) data!: ButtonModel;

	constructor(private router: Router) {}

	protected onBackClick = () => this.router.navigate([this.data.backRoute]);
}

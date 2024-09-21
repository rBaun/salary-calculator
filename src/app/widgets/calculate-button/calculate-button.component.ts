import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
	selector: 'app-calculate-button',
	standalone: true,
	imports: [ButtonComponent, TranslocoPipe],
	templateUrl: './calculate-button.component.html',
	styleUrl: './calculate-button.component.scss',
})
export class CalculateButtonComponent {
	constructor(private router: Router) {}

	protected onCalculateClick = () => {
		this.calculateSalary();
	};

	private calculateSalary = () => {
		// Validate salary inputs

		// Navigate to result window (/calculator/results)
		this.router.navigate(['/calculator/result']);
	};
}

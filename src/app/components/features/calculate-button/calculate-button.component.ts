import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonConfirmComponent } from '../../common/button-confirm/button-confirm.component';

@Component({
	selector: 'app-calculate-button',
	standalone: true,
	imports: [ButtonConfirmComponent, TranslocoModule],
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

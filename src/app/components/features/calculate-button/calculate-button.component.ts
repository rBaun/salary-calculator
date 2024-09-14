import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ButtonConfirmComponent } from '../../common/button-confirm/button-confirm.component';

@Component({
	selector: 'app-calculate-button',
	standalone: true,
	imports: [ButtonConfirmComponent, TranslocoModule],
	templateUrl: './calculate-button.component.html',
	styleUrl: './calculate-button.component.scss',
})
export class CalculateButtonComponent {}

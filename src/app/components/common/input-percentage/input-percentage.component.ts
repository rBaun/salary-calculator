import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-input-percentage',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './input-percentage.component.html',
	styleUrl: './input-percentage.component.scss',
})
export class InputPercentageComponent {
	@Input({ required: true }) formControl!: FormControl;
	@Input() label = '';
	@Input() placeholder = '';
	@Input() disable = false;
	@Input() lowestNumber = 0;
	@Input() highestNumber = 100;
}

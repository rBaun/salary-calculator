import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModel } from '../models/input.model';

@Component({
	selector: 'app-input-percentage',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './input-percentage.component.html',
	styleUrl: './input-percentage.component.scss',
})
export class InputPercentageComponent {
	@Input({ required: true }) data!: InputModel;

	protected lowestNumber = 0;
	protected highestNumber = 100;
}

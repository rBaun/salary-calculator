import { Component, Input } from '@angular/core';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputPercentageComponent } from './input-percentage/input-percentage.component';
import { InputModel } from './models/input.model';

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [InputNumberComponent, InputPercentageComponent],
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss',
})
export class InputComponent {
	@Input({ required: true }) data!: InputModel;
}

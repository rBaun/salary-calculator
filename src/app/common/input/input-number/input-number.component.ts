import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModel } from '../models/input.model';

@Component({
	selector: 'app-input-number',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './input-number.component.html',
	styleUrl: './input-number.component.scss',
})
export class InputNumberComponent {
	@Input({ required: true }) data!: InputModel;
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from "../../common/form/form.component";
import { FormModel } from '../../common/form/models/form.model';

@Component({
  selector: 'app-calculator-settings',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './calculator-settings.component.html',
  styleUrl: './calculator-settings.component.scss'
})
export class CalculatorSettingsComponent {
  protected settingsForm!: FormModel;
  protected languageControl = new FormControl();
  protected currencyControl = new FormControl();
  protected includeTooltipsControl = new FormControl();
  protected includeRetirementSavingsControl = new FormControl();
  protected includeDetailedResultsControl = new FormControl();
  protected includeInflationControl = new FormControl();
  private formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      language: this.languageControl,
    });
    this.buildForm();
  }

  private buildForm = (): void => {
    const settings = {
      formGroup: this.formGroup,
      fields: [
        {
          label: 'Language',
          name: 'language',
          type: 'select',
          options: [
            { label: 'English', value: 'en' },
            { label: 'Danish', value: 'dk' }
          ],
          validators: [Validators.required],
        }
      ]
    } as FormModel;

    this.settingsForm = settings;
  }
}

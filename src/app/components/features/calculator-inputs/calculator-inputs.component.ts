import { Component } from '@angular/core';
import { ButtonResetComponent } from "../../common/button-reset/button-reset.component";
import { IconHelpComponent } from "../../common/icon-help/icon-help.component";
import { IconInfoComponent } from "../../common/icon-info/icon-info.component";
import { InputNumberComponent } from "../../common/input-number/input-number.component";
import { InputPercentageComponent } from "../../common/input-percentage/input-percentage.component";

@Component({
  selector: 'app-calculator-inputs',
  standalone: true,
  imports: [InputNumberComponent, InputPercentageComponent, IconHelpComponent, IconInfoComponent, ButtonResetComponent],
  templateUrl: './calculator-inputs.component.html',
  styleUrl: './calculator-inputs.component.scss'
})
export class CalculatorInputsComponent {

}

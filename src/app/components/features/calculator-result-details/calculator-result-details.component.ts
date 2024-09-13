import { Component } from '@angular/core';
import { AccordionComponent } from "../../common/accordion/accordion.component";

@Component({
  selector: 'app-calculator-result-details',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './calculator-result-details.component.html',
  styleUrl: './calculator-result-details.component.scss'
})
export class CalculatorResultDetailsComponent {

}

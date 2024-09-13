import { Component } from '@angular/core';
import { ButtonConfirmComponent } from "../../common/button-confirm/button-confirm.component";

@Component({
  selector: 'app-calculate-button',
  standalone: true,
  imports: [ButtonConfirmComponent],
  templateUrl: './calculate-button.component.html',
  styleUrl: './calculate-button.component.scss'
})
export class CalculateButtonComponent {

}

import { Routes } from '@angular/router';
import { PageCalculatorComponent } from '../pages/page-calculator/page-calculator.component';
import { PageResultComponent } from '../pages/page-result/page-result.component';

export const CALCULATOR_ROUTES: Routes = [
	{
		path: '',
		component: PageCalculatorComponent,
	},
	{
		path: 'result',
		component: PageResultComponent,
	},
];

import { Routes } from '@angular/router';
import { PageCalculatorComponent } from '../components/pages/page-calculator/page-calculator.component';
import { PageResultComponent } from '../components/pages/page-result/page-result.component';

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

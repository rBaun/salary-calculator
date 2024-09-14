import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'calculator',
	},
	{
		path: 'calculator',
		loadChildren: () =>
			import('./routes/calculator.routes').then(m => m.CALCULATOR_ROUTES),
	},
];

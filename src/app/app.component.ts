import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconCogComponent } from './components/common/icon-cog/icon-cog.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, IconCogComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	protected settingsClick = () => {
		this.onSettingsClicked();
	};

	private onSettingsClicked = () => {
		console.log('Settings clicked');
	};
}

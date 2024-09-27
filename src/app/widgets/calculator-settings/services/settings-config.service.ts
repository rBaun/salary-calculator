import { Injectable } from '@angular/core';
import { defaultSettingsConfig } from '@config/default-config';
import { Observable, Subject } from 'rxjs';
import { SettingsConfig } from '../models/settings-config.model';

@Injectable({
	providedIn: 'root',
})
export class ConfigService {
	private configSubject = new Subject<SettingsConfig>();
	public config$ = this.configSubject.asObservable();

	constructor() {
		this.loadDefaultSettings();
	}

	public updateSettings = (settings: SettingsConfig) =>
		this.configSubject.next(settings);
	public getSettings = (): Observable<SettingsConfig> => this.config$;

	private loadDefaultSettings = (): void => {
		const defaultSettings = defaultSettingsConfig;
		this.configSubject.next(defaultSettings);
	};
}

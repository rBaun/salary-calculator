import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SettingsConfig } from "../models/settings-config.model";

@Injectable({
	providedIn: 'root',
})
export class ConfigService {
    private configSubject = new Subject<SettingsConfig>();
    public config$ = this.configSubject.asObservable();

    constructor() {}

    public updateSettings = (settings: SettingsConfig) => this.configSubject.next(settings);
    public getSettings = (): Observable<SettingsConfig> => this.config$;
}
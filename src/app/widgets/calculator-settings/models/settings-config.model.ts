import { SupportedCurrency } from './supported-currency.type';
import { SupportedLanguage } from './supported-language.type';

export interface SettingsConfig {
	display: {
		language: SupportedLanguage;
		currency: SupportedCurrency;
		displayHelpTooltip: boolean;
		displayInfoTooltip: boolean;
	};
	calulations: {
		includeRetirementSavings: boolean;
		includeDetailedResults: boolean;
	};
}

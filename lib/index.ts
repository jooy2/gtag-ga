import ControlParams = Gtag.ControlParams;
import EventParams = Gtag.EventParams;
import ConfigParams = Gtag.ConfigParams;
import CustomParams = Gtag.CustomParams;

declare global {
	interface Window {
		dataLayer: any[];
	}
}

export default class GtagGA {
	static initializeGtag(
		trackingId: string,
		config: ControlParams | EventParams | ConfigParams | CustomParams
	): void {
		if (typeof window === 'undefined') {
			throw new Error(
				`'window' object not found, make sure you're using initialize in the right place.`
			);
		}
		if (typeof window.gtag !== 'undefined') {
			return;
		}

		const script = document.createElement('script');

		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;

		document.head.insertBefore(script, document.head.firstChild);

		window.dataLayer = window.dataLayer || [];

		GtagGA.gtag('js', new Date());
		GtagGA.gtag('config', trackingId, config);
	}

	static gtag(...args: any[]): void {
		window.dataLayer.push(args);
	}
}

export { GtagGA };

export const { initializeGtag, gtag } = GtagGA;

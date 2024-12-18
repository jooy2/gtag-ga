import ControlParams = Gtag.ControlParams;
import EventParams = Gtag.EventParams;
import ConfigParams = Gtag.ConfigParams;
import CustomParams = Gtag.CustomParams;

declare global {
	interface Window {
		dataLayer: any[];
	}
}

export function gtag(...args: any[]): void {
	window.dataLayer.push(args);
}

export function initializeGtag(
	trackingId: string,
	config?: ControlParams | EventParams | ConfigParams | CustomParams
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

	gtag('js', new Date());
	gtag('config', trackingId, config);
}

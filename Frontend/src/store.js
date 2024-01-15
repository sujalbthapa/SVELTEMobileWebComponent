import { writable } from 'svelte/store';

export const popupState = writable({
	isOpen: false,
	errorMessage: ''
});

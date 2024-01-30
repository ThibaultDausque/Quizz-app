import { writable } from 'svelte/store';

export const score = writable(0);
export const totalQuestions = writable(0);
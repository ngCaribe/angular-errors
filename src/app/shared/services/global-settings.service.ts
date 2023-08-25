import { Injectable, signal } from '@angular/core';

export const THEMES = ['light', 'dark', 'cupcake'];
@Injectable({
  providedIn: 'root',
})
export class GlobalSettingsService {
  selectedTheme = signal('light');
  isNavOpen = signal(true);
}

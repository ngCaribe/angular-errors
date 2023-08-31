import { Injectable, signal } from '@angular/core';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class GlobalSettingsService {
  selectedTheme = signal<Theme>(Theme.LIGHT);
  isNavOpen = signal(true);
}

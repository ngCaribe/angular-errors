import { Injectable, signal } from '@angular/core';

export const THEMES = ['light', 'dark', 'cupcake'];
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  selectedTheme = signal('light');
  isNavOpen = signal(true);
}

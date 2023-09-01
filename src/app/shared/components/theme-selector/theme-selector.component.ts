import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  GlobalSettingsService,
  Theme,
} from '../../services/global-settings.service';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [NgIf],
  templateUrl: './theme-selector.component.html',
})
export class ThemeSelectorComponent {
  globalSettingsService = inject(GlobalSettingsService);
  selectedTheme = this.globalSettingsService.selectedTheme;
  THEME = Theme;

  toggleTheme() {
    const newTheme =
      this.selectedTheme() === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    this.selectedTheme.set(newTheme);
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import {
  THEMES,
  GlobalSettingsService,
} from '../../services/global-settings.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styles: [],
})
export class NavigationComponent {
  themeService = inject(GlobalSettingsService);
  selectedTheme = this.themeService.selectedTheme;
  isNavOpen = this.themeService.isNavOpen;
  themes = THEMES;

  onThemeChange(event: any) {
    this.themeService.selectedTheme.set(event?.target.value);
  }

  toggleNav() {
    this.themeService.isNavOpen.set(!this.isNavOpen());
  }
}

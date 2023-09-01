import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  GlobalSettingsService,
  Theme,
} from '../../services/global-settings.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  THEME = Theme;
  globalSettingsService = inject(GlobalSettingsService);
  selectedTheme = this.globalSettingsService.selectedTheme;
  isNavOpen = this.globalSettingsService.isNavOpen;

  toggleNav() {
    this.globalSettingsService.isNavOpen.set(!this.isNavOpen());
  }
}

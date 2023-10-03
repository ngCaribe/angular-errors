import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  GlobalSettingsService,
  Theme,
} from '../../services/global-settings.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  THEME = Theme;
  themeService = inject(GlobalSettingsService);
  isNavOpen = this.themeService.isNavOpen;
  selectedTheme = this.themeService.selectedTheme;

  links = [
    {
      path: '/errors',
      label: 'Errors',
    },
  ];

  toggleSidebar() {
    if (!this.isNavOpen()) {
      this.themeService.isNavOpen.set(!this.isNavOpen());
    }
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalSettingsService } from '../../services/global-settings.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  themeService = inject(GlobalSettingsService);
  isNavOpen = this.themeService.isNavOpen;
  selectedTheme = this.themeService.selectedTheme;

  links = [
    {
      path: '/errors',
      label: 'Errors',
    },
    { path: '/errors-overview', label: 'Errors Overview' },
    {
      label: 'Errors List',
      subitems: [
        { path: '/errors-list', label: 'Errors List' },
        { path: '/errors-list', label: 'Errors List' },
        { path: '/errors-list', label: 'Errors List' },
      ],
    },
  ];

  toggleNideBar() {
    this.themeService.isNavOpen.set(!this.isNavOpen());
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  themeService = inject(ThemeService);
  isNavOpen = this.themeService.isNavOpen;
  selectedTheme = this.themeService.selectedTheme;

  links = [
    {
      path: '/errors',
      label: 'Errors',
    },
    { path: '/errors-overview', label: 'Errors Overview' },
  ];

  toggleNideBar() {
    this.themeService.isNavOpen.set(!this.isNavOpen());
  }
}

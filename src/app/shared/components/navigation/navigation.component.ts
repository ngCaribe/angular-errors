import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { THEMES, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styles: [],
})
export class NavigationComponent {
  themeService = inject(ThemeService);
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

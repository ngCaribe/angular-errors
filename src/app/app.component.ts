import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GlobalSettingsService } from './shared/services/global-settings.service';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from './shared/components/theme-selector/theme-selector.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  host: {
    class: 'flex flex-col',
  },
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
    SidebarComponent,
    ThemeSelectorComponent,
  ],
})
export class AppComponent {
  globalSettingsService = inject(GlobalSettingsService);
  selectedTheme = this.globalSettingsService.selectedTheme;
  isNavOpen = this.globalSettingsService.isNavOpen;
}

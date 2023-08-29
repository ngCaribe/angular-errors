import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GlobalSettingsService } from './shared/services/global-settings.service';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',

  host: {
    class: 'flex flex-col',
  },
})
export class AppComponent {
  themeService = inject(GlobalSettingsService);
  selectedTheme = this.themeService.selectedTheme;
  isNavOpen = this.themeService.isNavOpen;
}

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ThemeService } from './shared/services/theme.service';
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
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class AppComponent {
  themeService = inject(ThemeService);
  selectedTheme = this.themeService.selectedTheme;
  isNavOpen = this.themeService.isNavOpen;
}

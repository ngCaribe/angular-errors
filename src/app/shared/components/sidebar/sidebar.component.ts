import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  links = [
    {
      path: '/errors',
      label: 'Errors',
    },
    { path: '/errors-overview', label: 'Errors Overview' },
  ];
}

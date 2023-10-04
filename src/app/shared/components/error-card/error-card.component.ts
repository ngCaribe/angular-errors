import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthorTwitterLinkComponent } from '../author-twitter-link/author-twitter-link.component';
@Component({
  selector: 'app-error-card',
  standalone: true,
  imports: [CommonModule, RouterLink, AuthorTwitterLinkComponent],
  templateUrl: './error-card.component.html',
})
export class ErrorCardComponent {
  @Input({ required: true }) error: any;
}

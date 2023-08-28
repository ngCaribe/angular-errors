import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './error-card.component.html',
  styles: [],
})
export class ErrorCardComponent {
  @Input({ required: true }) error: any;
}

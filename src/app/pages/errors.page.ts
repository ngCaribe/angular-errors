import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
      }
    `,
  ],
})
export default class ErrorsPageComponent {}

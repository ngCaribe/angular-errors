import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  host: {
    class: 'flex w-full',
  },
})
export default class ErrorsPageComponent {}

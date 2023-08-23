import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="flex items-center gap-16 flex-col pl-16">
      <h1 class="md:text-4xl text-2xl font-bold">Angular Errors</h1>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
      }
    `,
  ],
  imports: [RouterLink],
})
export default class HomeComponent {}

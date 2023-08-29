import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export const routeMeta: RouteMeta = {
  title: 'Angular Errors',
};

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="flex pl-16 pt-16">
      <h1 class="md:text-5xl text-3xl font-bold">Angular Errors</h1>
    </div>
  `,
  host: {
    class: 'flex flex-1 ',
  },
  imports: [RouterLink],
})
export default class HomeComponent {}

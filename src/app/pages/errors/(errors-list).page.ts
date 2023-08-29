import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import { ErrorCardComponent } from '../../shared/components/error-card/error-card.component';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'Errors List',
};
export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
  selector: 'app-errors-list',
  standalone: true,
  imports: [NgFor, ErrorCardComponent],
  template: `
    <div class="bg-base-100 flex flex-col w-full md:pl-16 md:pt-16 px-4 pt-4">
      <h1 class="font-semibold md:text-4xl text-2xl pb-8">Errors</h1>

      <section class="flex flex-wrap gap-8 md:justify-normal justify-center">
        <div
          *ngFor="let error of content"
          class="card w-96 bg-base-200 shadow-xl"
        >
          <app-error-card [error]="error"></app-error-card>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    `,
  ],
})
export default class ErrorsListComponent {
  readonly content: any = injectContentFiles<PostAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/errors/')
  );
}

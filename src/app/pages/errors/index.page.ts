import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import { ErrorCardComponent } from '../../shared/components/error-card/error-card.component';
import { RouteMeta } from '@analogjs/router';
import { ErrorPageAttributes } from 'src/app/shared/models/error-page-attributes';

export const routeMeta: RouteMeta = {
  title: 'Errors List',
};
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
  host: {
    class: 'flex flex-col flex-1 w-full items-center',
  },
})
export default class ErrorsListComponent {
  readonly content: any = injectContentFiles<ErrorPageAttributes>(
    (contentFile) => contentFile.filename.includes('/src/content/errors/')
  );
}

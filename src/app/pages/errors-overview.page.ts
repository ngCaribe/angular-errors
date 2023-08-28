import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-errors-overview',
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe, NgIf, RouterLink],
  template: `
    <ng-container *ngIf="content$ | async as content">
      <article
        class="flex flex-col prose prose-slate  dark:prose-invert w-full md:max-w-4xl  md:pl-16 md:pt-16 px-4 pt-4"
      >
        <h1 class="font-bold md:text-4xl text-2xl">Errors Overview</h1>
        <analog-markdown
          class="markdown"
          [content]="content.content"
        ></analog-markdown>
      </article>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        flex: 1;
        align-items: center;
        width: 100%;
      }
    `,
  ],
})
export default class ErrorsOverviewComponent {
  readonly content$ = injectContent<any>({
    customFilename: 'errors-overview/errors-overview',
  });
}

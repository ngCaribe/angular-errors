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
        class="flex flex-col prose prose-slate  dark:prose-invert md:max-w-4xl py-16 w-full px-4"
      >
        <h1 class="font-bold md:text-5xl text-3xl py-8">Errors Overview</h1>
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

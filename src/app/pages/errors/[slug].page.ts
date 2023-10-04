import { injectContent, MarkdownComponent } from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { title2Resolver } from '../../shared/resolvers/title.resolver';
import { metatagsResolver } from '../../shared/resolvers/metatags.resolver';
import { AuthorTwitterLinkComponent } from '../../shared/components/author-twitter-link/author-twitter-link.component';
import { ErrorPageAttributes } from 'src/app/shared/models/error-page-attributes';

export const routeMeta: RouteMeta = {
  title: title2Resolver,
  meta: metatagsResolver,
};

@Component({
  selector: 'app-error-detail',
  standalone: true,
  template: `
    <ng-container *ngIf="content$ | async as content">
      <article
        class="flex flex-col prose prose-slate  dark:prose-invert md:max-w-4xl py-16 w-full px-4"
      >
        <a routerLink="/errors" class="btn items-center mb-8 w-64 flex flex-row"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span>Back to Errors List</span></a
        >

        <ng-container *ngIf="content.attributes.authorTwitter as author">
          <app-author [author]="author" class="flex justify-end" />
        </ng-container>

        <analog-markdown
          class="markdown"
          [content]="content.content"
        ></analog-markdown>
        <a routerLink="/errors" class="btn items-center mb-8 w-64 flex flex-row"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span>Back to Errors List</span></a
        >
      </article>
    </ng-container>
  `,
  host: {
    class: 'flex flex-1 w-full justify-center',
  },
  imports: [
    MarkdownComponent,
    AsyncPipe,
    NgIf,
    RouterLink,
    AuthorTwitterLinkComponent,
  ],
})
export default class ErrorDetailComponent {
  readonly content$ = injectContent<ErrorPageAttributes>({
    param: 'slug',
    subdirectory: 'errors',
  });
}

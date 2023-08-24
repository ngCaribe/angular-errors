import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
  selector: 'app-errors-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  template: `
    <div class="bg-base-100 flex flex-col w-full md:pl-16 md:pt-16 px-4 pt-4">
      <h1 class="font-bold md:text-5xl text-3xl pb-8">Errors</h1>

      <section class="flex flex-wrap gap-8">
        <div
          *ngFor="let error of content"
          class="card w-96 bg-base-200 shadow-xl"
        >
          <figure>
            <img class="w-24 pt-8" src="/angular.svg" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">NG-{{ error.attributes.title }}</h2>
            <p>{{ error.attributes.description }}</p>
            <div class="card-actions justify-end">
              <a class="btn btn-neutral" [routerLink]="[error.slug]"
                >Go to Error</a
              >
            </div>
          </div>
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

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="bg-base-100 md:pt-16 pt-4 flex-col">
      <div class="container flex items-center ">
        <div class="flex flex-col items-center max-w-sm mx-auto text-center">
          <p
            class="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1
            class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
          >
            Page not found
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            The page you are looking for doesn't exist. Here are some helpful
            links:
          </p>

          <div
            class="flex items-center w-full mt-6 gap-4 shrink-0 sm:w-auto flex-wrap justify-center"
          >
            <button class="btn btn-neutral">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <a routerLink="/errors">Go to Errors Page</a>
            </button>

            <button class="btn btn-primary ">
              <a routerLink="/"> Take me home </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    `,
  ],
})
export default class PageNotFoundComponent {}

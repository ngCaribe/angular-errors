import { ResolveFn } from '@angular/router';

export const title2Resolver: ResolveFn<string> = (route, state) => {
  return route.params['slug'];
};

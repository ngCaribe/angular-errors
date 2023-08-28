import { ResolveFn } from '@angular/router';

export const title2Resolver: ResolveFn<string> = (route, state) => {
  const slug = route.params['slug'];
  return slug;
};

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-twitter-link.component.html',
  styles: [],
})
export class AuthorTwitterLinkComponent {
  readonly twitterUrl = 'https://twitter.com/';
  @Input({ required: true }) author: string = ''; // must be a proper twitter handle
}

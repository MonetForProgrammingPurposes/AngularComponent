
import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  url: string = '';
  urls: string[] = [];

  addUrl() {
    if (this.url) {
      this.urls.push(this.url);
      this.url = '';
    }
  }

}

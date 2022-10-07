import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-app';

  loadedPage = 'recipe';

  onNavigate(page: string) {
    this.loadedPage = page;
  }
}

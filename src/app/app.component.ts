import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="greeting">Raporty</h1>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
}

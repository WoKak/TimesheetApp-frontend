import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div class="jumbotron">\n' +
  '  <h1 class="display-3">Raporty</h1>\n' +
    '<p class="lead font-italic">Aplikacja do raportowania czasu pracy</p>\n' +
  '</div>\n' +
  '  <router-outlet></router-outlet>\n',
})

export class AppComponent {
}

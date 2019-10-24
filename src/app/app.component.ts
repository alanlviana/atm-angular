import { Component } from '@angular/core';
import { routerTransition } from './router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ routerTransition ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atm-angular';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}

import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodHubComponent } from './food-hub.component';

const routes: RouterConfig = [
  {
    path: 'hub',
    component: FoodHubComponent,
    terminal: true
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]
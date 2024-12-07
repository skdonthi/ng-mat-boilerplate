import { Routes } from '@angular/router';
import { GroupByComponent } from './group-by/group-by.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'dashboard',
    component: GroupByComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

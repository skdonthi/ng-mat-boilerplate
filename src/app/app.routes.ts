import { Routes } from '@angular/router';
import { GroupByComponent } from './group-by/group-by.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: '',
    component: GroupByComponent,
  },
];
